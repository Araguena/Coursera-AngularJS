(function(){
  'use strict';

  angular.module('MsgApp', [])

    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope, $filter) {
      $scope.name = 'Iryna';
      $scope.stateOfBeing = 'hungry';
      $scope.cookieCost = .45;

      $scope.sayMessage = function() {
        var msg = "Who likes fancy snacks?";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.feedIryna = function() {
        $scope.stateOfBeing = 'fed';
      }
    }
})();
