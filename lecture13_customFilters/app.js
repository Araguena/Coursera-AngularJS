(function () {
  'use strict';

  angular.module('MsgApp', [])

    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', 'lovesFilter'];

  function MsgController($scope, lovesFilter) {
    $scope.name = 'Iryna';
    $scope.stateOfBeing = 'hungry';

    $scope.sayMessage = function () {
      var msg = "Who likes fancy snacks?";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Who likes fancy snacks?";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedIryna = function () {
      $scope.stateOfBeing = 'fed';
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", 'loves');
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
