"use strict";

//Напиши всі можливі варіанти створення функцій.
//Function expressions, function declarations, стрілкова функція.
// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function summArg() {
  console.log(arguments.length);
}

summArg(11, 30, 28, 55); // Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function twoNmbr(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
} //Напиши функцію, яка обчислює факторіал переданого їй числа.


function a(number) {
  var result = 1;

  for (var i = 1; i < number; i++) {
    result = result * i;
  }

  return result;
} // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
//Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function separateNumbers(a, b, c) {
  a = toString(a);
  b = toString(b);
  c = toString(c);
  var result = a + b + c;
  return result;
} //Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


function square(a, b) {
  return b ? a * b : a * a;
} //Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
//Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function perfectNum(a) {
  var result = 0;

  for (var i = 1; i <= a; i++) {
    if (a % i === 0) {
      result = result + i;
    }
  }

  return a === result ? 'Perfect' : 'Unperfect';
} //Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
//і виводить тільки ті числа з діапазону, які є досконалими. 
//Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.


var startNum = prompt("First point");
var finishtNum = prompt("Last point");

for (var i = startNum; i <= finishtNum; i++) {
  console.log("Number ".concat(i, " is ").concat(perfectNum(i)));
}