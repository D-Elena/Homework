"use strict";

//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
//передбач можливість введення невірних даних.
var age = '';

while (!age || !(+age > 0)) {
  age = prompt('How old are you?');
}

if (age <= 11) {
  alert('You are a child');
} else if (age <= 17) {
  alert('You are a teenager');
} else if (age <= 59) {
  alert('You are a adult');
} else if (age <= 100) {
  alert('You are pensioner');
} //Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


var numberSymbol = prompt('Enter a number from 0 to 9');
var convertedNumber = '';

switch (numberSymbol) {
  case '0':
    convertedNumber = ')';
    break;

  case '1':
    convertedNumber = '!';
    break;

  case '2':
    convertedNumber = '@';
    break;

  case '3':
    convertedNumber = '#';
    break;

  case '4':
    convertedNumber = '$';
    break;

  case '5':
    convertedNumber = '%';
    break;

  case '6':
    convertedNumber = '^';
    break;

  case '7':
    convertedNumber = '&';
    break;

  case '8':
    convertedNumber = '*';
    break;

  case '9':
    convertedNumber = '(';
    break;

  default:
    break;
}

console.log(convertedNumber); //Підрахуй суму всіх чисел в заданому користувачем діапазоні.

var a = 16;
var b = 2; //сумма всіх чисел від 2 до 16

var c = 0;

for (var i = 2; i <= a; i++) {
  c = c + i;
}

console.log(c); //Запитай у користувача 2 числа і знайди найбільший спільний дільник.

var firstNumber = 16;
var secondNumber = 12;
var smallerNumber = 0; //меньшее число из двух

var divider = 1; //общий делитель

if (firstNumber > secondNumber) {
  //если 16 > 12 то меньшее число будет 12
  smallerNumber = secondNumber;
} else {
  smallerNumber = firstNumber;
}

for (var _i = 1; _i <= smallerNumber; _i++) {
  if (firstNumber % _i == 0 && secondNumber % _i == 0) {
    divider = _i;
  }
}

console.log(divider); // Запитай у користувача число і виведи всі дільники цього числа.

var number = 16;
var dividers = '1'; //на 1 все делится

for (var _i2 = 2; _i2 <= number; _i2++) {
  //начала с двух, потому что на 1 и так все делится 
  if (number % _i2 == 0) {
    //находим все числа, деление на которые не дает остатка
    dividers = dividers + ',' + _i2;
  }
}

console.log(dividers); // Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

var fiveNumber = 83138;
var fiveArray = fiveNumber.toString().split(''); //число сделала строкой и разбила на масив

var reverseNumber = '';

for (var _i3 = 0; _i3 < fiveArray.length; _i3++) {
  reverseNumber = fiveArray[_i3] + reverseNumber; //прохожу по масиву и в новую переменную записываю обратный порядок цифер
}

reverseNumber = parseInt(reverseNumber); //тут привели строку в число

if (fiveNumber == reverseNumber) {
  //сделали проверку на палиндром
  console.log('Так воно э паліндромом');
} else {
  console.log('Воно не є паліндромом');
} // Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


var summ = 430;
var d;

if (summ <= 300 && summ >= 200) {
  d = summ - summ * 0.03;
  console.log('3%');
}

if (summ <= 500 && summ >= 300) {
  d = summ - summ * 0.05;
  console.log('5%');
}

if (summ >= 500) {
  d = summ - summ * 0.07;
  console.log('7%');
}

console.log(d); // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
//Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

var numbers = [1, 43, 45, 6, 33, 14, 28, 5, 16, 22];
var parni = 0;
var neparni = 0;
var dodatni = 0;
var videmni = 0;
var nuli = 0;

for (var _i4 = 0; _i4 < 10; _i4++) {
  if (numbers[_i4] < 0) {
    videmni++;
  }

  if (numbers[_i4] == 0) {
    nuli++;
  }

  if (numbers[_i4] > 0) {
    dodatni++;
  }

  if (numbers[_i4] % 2 == 0) {
    parni++;
  }

  if (numbers[_i4] % 2 != 0) {
    neparni++;
  }
}

console.log("\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0432\u0432\u0456\u0432 ".concat(parni, " \u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B, ").concat(neparni, " \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B,  ").concat(dodatni, " \u0434\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B, ").concat(videmni, " \u0432\u0456\u0434\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B, ").concat(nuli, " \u043D\u0443\u043B\u0456")); // Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

var dayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var keyWeek = 0;

while (keyWeek < dayWeek.length) {
  if (window.confirm("".concat(dayWeek[keyWeek], " \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
    keyWeek++;
  } else {
    break;
  }
} // // Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


for (var _i5 = 2; _i5 < 10; _i5++) {
  for (var x = 1; x <= 10; x++) {
    console.log("".concat(_i5, " * ").concat(x, " = ").concat(_i5 * x));
  }
}