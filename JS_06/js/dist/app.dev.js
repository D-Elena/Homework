"use strict";

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
// кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// 1)Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
var shoppingList = [{
  nameProduct: 'cookies',
  amount: 2,
  isBought: false,
  price: 80,
  totalPrice: 160
}, {
  nameProduct: 'candy',
  amount: 5,
  isBought: true,
  price: 100,
  totalPrice: 500
}, {
  nameProduct: 'chocolate',
  amount: 6,
  isBought: false,
  price: 50,
  totalPrice: 300
}, {
  nameProduct: 'nesquik',
  amount: 3,
  isBought: true,
  price: 60,
  totalPrice: 180
}];
shoppingList.sort(function (a, b) {
  if (a.isBought > b.isBought) {
    return 1;
  } else {
    return -1;
  }
});
console.log(shoppingList); // 2)Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

buyProduct('chocolate');
buyProduct('cookies');

function buyProduct() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (name != '') {
    var item = shoppingList.findIndex(function (el) {
      return el.nameProduct === name;
    });

    if (item !== -1) {
      shoppingList[item].isBought = true;
    }
  }
}

console.log(shoppingList); // 1) Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
//    в якому продукт, що ми шукаємо, буде відсутнім)

var newProduct = ['eggs', 'chicken', 'tea', 'coffee', 'water', 'duck'];
newProduct.splice(2, 3);
console.log(newProduct); // 2) Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
//    необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, 
//    наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

var secondShoppingList = [{
  nameProduct: 'cookies',
  amount: 2,
  isBought: false,
  price: 80,
  totalPrice: 160
}, {
  nameProduct: 'candy',
  amount: 5,
  isBought: true,
  price: 100,
  totalPrice: 500
}, {
  nameProduct: 'chocolate',
  amount: 6,
  isBought: false,
  price: 50,
  totalPrice: 300
}, {
  nameProduct: 'nesquik',
  amount: 3,
  isBought: true,
  price: 60,
  totalPrice: 180
}];

function addProduct(name, amount, price) {
  var item = secondShoppingList.findIndex(function (el) {
    return el.nameProduct === name;
  });

  if (item == -1) {
    var newItem = {
      nameOfProduct: name,
      amount: amount,
      isBought: false,
      price: price,
      totalPrice: price * amount
    };
    secondShoppingList.push(newItem);
  } else {
    secondShoppingList[item].amount += amount;
    secondShoppingList[item].totalPrice += price * amount;
  }

  console.log(secondShoppingList);
}

addProduct('cheese', 5, 50);
addProduct('nesquik', 2, 60); // 1) Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

var result = 0;
secondShoppingList.forEach(function (item) {
  result += item.totalPrice;
});
console.log(result); // 2) Підрахунок суми всіх (не) придбаних продуктів.

var resultBought = 0;
var resultNotBought = 0;
secondShoppingList.forEach(function (item) {
  if (item.isBought == true) {
    resultBought += item.totalPrice;
  }

  if (item.isBought == false) {
    resultNotBought += item.totalPrice;
  }
});
console.log("\u0421\u0443\u043C\u043C\u0430 \u0432\u0441\u0456\u0445 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 " + resultBought);
console.log("\u0421\u0443\u043C\u043C\u0430 \u0432\u0441\u0456\u0445 \u043D\u0435\u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 " + resultNotBought); // 3) Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function listSort(list, decrease) {
  //уменьшение
  if (decrease == false) {
    list.sort(function (a, b) {
      return a.totalPrice - b.totalPrice;
    });
  }

  if (decrease == true) {
    list.sort(function (a, b) {
      return b.totalPrice - a.totalPrice;
    });
  }

  console.log(list);
}

listSort(shoppingList, false);
listSort(secondShoppingList, true);