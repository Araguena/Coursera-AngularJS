(function () {
  angular.module('LunchApp', [])

    .controller('LunchAppController', checkLunch);

  function checkLunch($scope) {
    $scope.lunchItems = '';
    $scope.result = '';
    $scope.lunchItemsCount = 0;

    $scope.checkLunchSize = function () {
      //Remove empty space and split the string
      var lunchItemsArray = $scope.lunchItems.replace(/\s+/g, "").split(',');

      //In the split string, leave only non-empty items - if an item between commas is empty string, don't include it
      var sortedArray = lunchItemsArray.filter(function (item) {
        return item != '';
      });

      if (sortedArray.length > 3) {
        $scope.result = 'Too much!';
      }
      else if (sortedArray.length > 0 && sortedArray.length <= 3) {
        $scope.result = 'Enjoy!';
      }
      else {
        $scope.result = 'Please enter data first';
      }
      setColor();
    };

    //Local function that sets message and input field color depending on the input
    function setColor() {
      switch ($scope.result) {
        case "Enjoy!":
          $scope.inputBorderColor = "input-border-green";
          $scope.messageColor = "text-green";
          break;
        case 'Too much!':
        case 'Please enter data first':
          $scope.inputBorderColor = "input-border-red";
          $scope.messageColor = "text-red";
          break;
      }
    }
  }
})();
