(function() {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {
    $scope.counter  = 0;

    // 3 - the best way is to use native Angular service instead of built-in JS function
    $scope.upCounter = function() {
      $timeout(function(){
        $scope.counter++;
      }, 2000);
    };


    // 2 - apply with catch exceptions for you and will automatically call digest
    //$scope.upCounter = function() {
    //  setTimeout(function(){
    //    $scope.$apply(function(){
    //      $scope.counter++;
    //      console.log('Counter incremented!');
    //    });
    //  }, 2000);
    //};

    // 1 - Bad things about $digest is that it will not throw the errors and exceptions for you
    //$scope.upCounter = function() {
    //  setTimeout(function(){
    //    $scope.counter++;
    //    console.log('Counter incremented!');
    //    $scope.$digest();
    //  }, 2000);
    //};
  }
})();
