//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
//передбач можливість введення невірних даних.

let age = '';

while(!age || !(+age > 0)) {
    age = prompt('How old are you?');
}

if (age <= 11) {
    alert('You are a child');
}
else if (age <= 17) {
    alert('You are a teenager');
}
else if (age <= 59) {
    alert('You are a adult');
}
else if (age <= 100) {
    alert('You are pensioner');
}



//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


const numberSymbol = prompt('Enter a number from 0 to 9');
let convertedNumber = '';

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

console.log(convertedNumber);




//Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let a = 16;
let b = 2; //сумма всіх чисел від 2 до 16
let c = 0; 

for (let i = 2; i <= a; i++) {
    c = c + i
}

console.log(c);




//Запитай у користувача 2 числа і знайди найбільший спільний дільник.


let firstNumber = 16;
let secondNumber = 12; 
let smallerNumber = 0; //меньшее число из двух
let divider = 1; //общий делитель

if(firstNumber > secondNumber) { //если 16 > 12 то меньшее число будет 12
    smallerNumber = secondNumber
} else {
    smallerNumber = firstNumber
}

for (let i = 1; i <= smallerNumber; i++) {
    if(firstNumber%i == 0 && secondNumber%i == 0) {
        divider = i
    }
}

console.log(divider);




// Запитай у користувача число і виведи всі дільники цього числа.

let number = 16;
let dividers = '1'; //на 1 все делится

for (let i = 2; i <= number; i++) { //начала с двух, потому что на 1 и так все делится 
    if(number%i == 0) { //находим все числа, деление на которые не дает остатка
        dividers = dividers + ',' + i
    }
}

console.log(dividers);




// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


let fiveNumber = 83138;
let fiveArray = fiveNumber.toString().split(''); //число сделала строкой и разбила на масив
let reverseNumber = '';

for (let i = 0; i < fiveArray.length; i++) {
    reverseNumber = fiveArray[i] + reverseNumber; //прохожу по масиву и в новую переменную записываю обратный порядок цифер
}
reverseNumber = parseInt(reverseNumber); //тут привели строку в число

if(fiveNumber == reverseNumber) { //сделали проверку на палиндром
    console.log('Так воно э паліндромом');
} 
else {
    console.log('Воно не є паліндромом');
}



// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


const summ = 430;
let d 

if(summ <=300 && summ >=200) {
    d = summ-summ*0.03
    console.log('3%');
}
if(summ <=500 && summ >=300) {
    d = summ-summ*0.05
    console.log('5%');
}
if(summ >=500) {
    d = summ-summ*0.07
    console.log('7%');
}

console.log(d);





// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
//Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const numbers = [1, 43, 45, 6, 33, 14, 28, 5, 16, 22];
let parni = 0;
let neparni = 0;
let dodatni = 0;
let videmni = 0;
let nuli = 0;

for (let i = 0; i < 10; i++) {
    if(numbers[i] < 0) {
        videmni++;
    }
    if(numbers[i] == 0) {
        nuli++;
    }
    if(numbers[i] > 0) {
        dodatni++;
    }
    if(numbers[i]%2 == 0) {
        parni++;
    }
    if(numbers[i]%2 != 0) {
        neparni++;
    }
}

console.log(`Користувач ввів ${parni} парних чисел, ${neparni} непарних чисел,  ${dodatni} додатніх чисел, ${videmni} відємних чисел, ${nuli} нулі`);




// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


const dayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
let keyWeek = 0;

while (keyWeek < dayWeek.length) {
    if(window.confirm(`${dayWeek[keyWeek]} Хочеш побачити наступний день?`)) {
        keyWeek++
    }
    else {
        break
    }
} 



// // Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.



for (let i = 2; i < 10; i++) {
    for (let x = 1; x <= 10; x++) {
        console.log(`${i} * ${x} = ${i * x}`);
    }
}