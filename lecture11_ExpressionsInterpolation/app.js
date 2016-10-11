(function(){
  'use strict';

  angular.module('MsgApp', [])

    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      $scope.name = 'Iryna';
      $scope.stateOfBeing = 'hungry';

      $scope.sayMessage = function() {
        return "Who likes fancy snacks?";
      };

      $scope.feedIryna = function() {
        $scope.stateOfBeing = 'fed';
      }
    }
})();
