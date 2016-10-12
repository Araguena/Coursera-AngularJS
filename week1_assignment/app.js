(function () {
  angular.module('LunchApp', [])

    .controller('LunchAppController', checkLunch);

  function checkLunch($scope) {
    $scope.lunchItems = '';
    $scope.lunchItemsCount = 0;

    $scope.checkLunchSize = function () {

      //Handle case when non-alphabetic characters are entered - replace with empty space
      if ($scope.lunchItems == "") {
        alert("Please enter data first");
      } else {

        $scope.lunchItemsCount = $scope.lunchItems.split(",").length;
        if ($scope.lunchItemsCount > 0 && $scope.lunchItemsCount <= 3) {
          alert("Enjoy!");
        }
        else {
          alert("Too much!");
        }
      }

    }
  }
})();
