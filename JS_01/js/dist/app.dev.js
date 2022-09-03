"use strict";

var userName = prompt('What is your name?');
alert('Hello,' + userName); //

var userAge = prompt('What is your year of birth?');

if (+userAge > 0) {
  alert("Your age ".concat(+userAge - 2022));
} else {
  alert("".concat(userAge, " it's not a number"));
} //


var sideLenght = prompt('Вкажіть довжину сторони квадрату?');

if (+sideLenght > 0) {
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(+sideLenght * 4));
} else {
  alert("".concat(sideLenght, " \u0446\u0435 \u043D\u0435 \u0447\u0438\u0441\u043B\u043E!"));
} //


var circleRadius = prompt('Вкажіть радіус кола?');
var circleRadiusConverted = parseFloat(circleRadius);

if (circleRadiusConverted > 0) {
  var circleSquare = Math.sqrt(Math.PI * circleRadiusConverted);
  alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 \u043A\u043E\u043B\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ".concat(circleSquare));
} //


var distanceCity = prompt('Вкажіть відстань в кілометрах між двома містами');
var hoursGet = prompt('Вкажіть за скільки часу ви хоче дістатися(в хвилинах)');
var distanceCityConverted = parseFloat(distanceCity);
var hoursGetConverted = parseFloat(hoursGet);

if (distanceCityConverted > 0) {
  alert("\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C, \u0437 \u044F\u043A\u043E\u044E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F, \u0449\u043E\u0431 \u0432\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0438 \u0432\u0447\u0430\u0441\u043D\u043E: ".concat(distanceCityConverted / hoursGetConverted * 60));
} //


var exchangeRate = prompt('Конвертор валют. Введіть сумму в доларах');
var exchangeRateConverted = parseFloat(exchangeRate);

if (exchangeRateConverted > 0) {
  alert("\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0432\u0430\u043B\u044E\u0442. \u0421\u0443\u043C\u043C\u0430 \u0432 \u0454\u0432\u0440\u043E: ".concat(exchangeRateConverted * 0.98));
}