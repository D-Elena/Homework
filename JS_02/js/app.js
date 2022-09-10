//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const addition = 0.1 + 0.2;

alert(addition.toFixed(1));


//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const c = "1";
const d = 2;

alert(+c + d);



//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.


const amount = prompt('Введіть обсяг флешки в ГБ');
const amountConverted = parseFloat(amount);

if(amountConverted > 0) {
    const fits = parseInt(amountConverted * 1024 / 820);
    alert(`${fits} файли розміром в 820 Мб поміститься на флешку`)
}



//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const wallet = prompt('Введіть суму грошей в гаманці');
const walletConverted = parseFloat(wallet);
const chocolate = 40;

if(walletConverted > 0) {
    const procent = parseFloat(walletConverted % chocolate);
    const amountChocolate = walletConverted / chocolate;
    alert(`У вас залишиться ${procent} гривень. Купити ви можете ${parseFloat.amountChocolate} шоколадок!`)
}





//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const numeric = prompt('Введіть тризначне число');
const numericConverted = Array.from(numeric).reverse(3).join('');

if(numericConverted > 0) {
    alert(`${numericConverted}`);
}




//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const depositAmount = prompt('Введіть суму вкладу в банк на 2 місяці');
const depositAmountConverted = parseFloat(depositAmount);
const depositRate = 0.5;

if(depositAmountConverted > 0) {
    const procentConverted = depositAmountConverted * depositRate / 12 * 2;
    alert(`Сума нарахованих відсотків ${procentConverted.toFixed(1)}`);
}









