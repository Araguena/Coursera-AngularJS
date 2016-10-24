(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyService = this;
    buyService.items = ShoppingListCheckOffService.toBuyItems;

    buyService.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtService = this;
    boughtService.items = ShoppingListCheckOffService.boughtItems;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyItems = [
      {
        name: 'wine',
        quantity: 10
      },
      {
        name: 'cheese',
        quantity: 5
      },
      {
        name: 'baguette',
        quantity: 3
      },
      {
        name: 'tomato',
        quantity: 10
      },
      {
        name: 'olives',
        quantity: 100
      }
    ];

    service.boughtItems = [];

    service.buyItem = function (itemIndex) {
      var boughtItemObject = service.toBuyItems.splice(itemIndex, 1)[0];
      var boughtItem = {
        name: boughtItemObject.name,
        quantity: boughtItemObject.quantity
      };
      service.boughtItems.push(boughtItem);
      console.log(boughtItemObject);
      console.log(service.boughtItems);
    }
  }

})();
