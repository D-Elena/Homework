const userName = prompt('What is your name?');

alert('Hello,' + userName);

//
const userAge = prompt('What is your year of birth?');

if(+userAge > 0) {
    alert(`Your age ${+userAge - 2022}`);
} else {
    alert(`${userAge} it's not a number`)
}

//
const sideLenght = prompt('Вкажіть довжину сторони квадрату?');

if(+sideLenght > 0) {
    alert(`Периметр квадрату дорівнює ${+sideLenght * 4}`);
} else {
    alert(`${sideLenght} це не число!`)
}

//
const circleRadius = prompt('Вкажіть радіус кола?');
const circleRadiusConverted = parseFloat(circleRadius);

if(circleRadiusConverted > 0) {
    const circleSquare = Math.sqrt(Math.PI * circleRadiusConverted);
    alert(`Площа окружності кола дорівнює: ${circleSquare}`);
} 

//
const distanceCity = prompt('Вкажіть відстань в кілометрах між двома містами');
const hoursGet = prompt('Вкажіть за скільки часу ви хоче дістатися(в хвилинах)');
const distanceCityConverted = parseFloat(distanceCity);
const hoursGetConverted = parseFloat(hoursGet);

if(distanceCityConverted > 0) {
    alert(`Швидкість, з якою необхідно рухатися, щоб встигнути вчасно: ${distanceCityConverted / hoursGetConverted * 60}`);
}

//
const exchangeRate = prompt('Конвертор валют. Введіть сумму в доларах');
const exchangeRateConverted = parseFloat(exchangeRate);

if(exchangeRateConverted > 0) {
    alert(`Конвертор валют. Сумма в євро: ${exchangeRateConverted * 0.98}`);
}

