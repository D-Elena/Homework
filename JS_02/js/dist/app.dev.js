"use strict";

//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var addition = 0.1 + 0.2;
alert(addition.toFixed(1)); //Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

var c = "1";
var d = 2;
alert(+c + d); //Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

var amount = prompt('Введіть обсяг флешки в ГБ');
var amountConverted = parseFloat(amount);

if (amountConverted > 0) {
  var fits = parseInt(amountConverted * 1024 / 820);
  alert("".concat(fits, " \u0444\u0430\u0439\u043B\u0438 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0432 820 \u041C\u0431 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443"));
} //Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.


var wallet = prompt('Введіть суму грошей в гаманці');
var walletConverted = parseFloat(wallet);
var chocolate = 40;

if (walletConverted > 0) {
  var procent = parseFloat(walletConverted % chocolate);
  var amountChocolate = walletConverted / chocolate;
  alert("\u0423 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F ".concat(procent, " \u0433\u0440\u0438\u0432\u0435\u043D\u044C. \u041A\u0443\u043F\u0438\u0442\u0438 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 ").concat(parseFloat.amountChocolate, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A!"));
} //Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).


var numeric = prompt('Введіть тризначне число');
var numericConverted = Array.from(numeric).reverse(3).join('');

if (numericConverted > 0) {
  alert("".concat(numericConverted));
} //Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


var depositAmount = prompt('Введіть суму вкладу в банк на 2 місяці');
var depositAmountConverted = parseFloat(depositAmount);
var depositRate = 0.5;

if (depositAmountConverted > 0) {
  var procentConverted = depositAmountConverted * depositRate / 12 * 2;
  alert("\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 ".concat(procentConverted.toFixed(1)));
}