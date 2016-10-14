(function () {
  angular.module('LunchApp', [])

    .controller('LunchAppController', checkLunch);

  function checkLunch($scope) {
    $scope.lunchItems = '';
    $scope.result = '';
    $scope.lunchItemsCount = 0;

    $scope.checkLunchSize = function () {
      //Remove empty space and split the string
      var lunchItemsArray = $scope.lunchItems.replace(" ", "").split(',');
      console.log("Lunch items array after split/replace", lunchItemsArray);

      //In the split string, leave only non-empty items - if an item between commas is empty string, don't include it
      var sortedArray = lunchItemsArray.filter(function (item) {
        return item != '';
      });
      console.log("Lunch items array after filtering", sortedArray);

      if (sortedArray.length > 3) {
        $scope.result = 'Too much!';
      }
      else if (sortedArray.length > 0 && sortedArray.length <= 3) {
        $scope.result = 'Enjoy!';
      }
      else {
        $scope.result = 'Please enter data first';
      }
    }
  }
})();
