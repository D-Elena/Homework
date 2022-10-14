"use strict";

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
// обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1)Метод, який виводить на екран інформацію про автомобіль.
// 2)Додавання ім’я водія у список
// 3)Перевірка водія на наявність його ім’я у списку
// 4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
var car = {
  manufacturer: 'bmw',
  model: 'M440ix',
  year: '2021',
  speed: '180',
  tank: '59',
  fuelAverage: '9',
  drivers: ['Lena'],
  infoCar: function infoCar() {
    console.log("\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A: ".concat(this.manufacturer, ", \u043C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, ", \u0440\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(this.year, ", \u0441\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ").concat(this.speed, ", \u043E\u0431\u0441\u044F\u0433 \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0431\u0430\u043A\u0443: ").concat(this.tank, ", \u0441\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u0438\u0432\u0430 \u043D\u0430 100 \u043A\u043C: ").concat(this.fuelAverage, ", \u0432\u043E\u0434\u0456\u0457: ").concat(this.drivers));
  },
  addDrivers: function addDrivers(driver) {
    this.drivers.push(driver);
    console.log(this.drivers);
  },
  userDistance: function userDistance(distance) {
    var distanceArg = distance / 100 * this.fuelAverage;
    var timeArg = parseFloat(distance / this.speed);

    if (timeArg >= 4) {
      var restTime = Math.trunc(timeArg / 4);
      timeArg = timeArg + restTime;
    }

    console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u043B\u0438\u0432\u0430 ".concat(distanceArg, ", \u0447\u0430\u0441 ").concat((timeArg * 60).toFixed(0)));
    console.log(timeArg);
  }
};
car.infoCar();
car.addDrivers('my husband');
car.userDistance(800); // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1)Для виведення часу на екран.
// 2)Зміни часу на передану кількість секунд.
// 3)Зміни часу на передану кількість хвилин.
// 4)Зміни часу на передану кількість годин.
// 5)Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, 
// то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  hour: 1,
  minutes: 20,
  seconds: 30,
  showTime: function showTime() {
    console.log("Time: ".concat(this.hour, " : ").concat(this.minutes, " : ").concat(this.seconds));
  },
  setSeconds: function setSeconds(seconds) {
    this.seconds = this.seconds + seconds;
    console.log(this.seconds);
  },
  setMinutes: function setMinutes(minutes) {
    this.minutes = this.minutes + minutes;
    console.log(this.minutes);
  },
  setHours: function setHours(hours) {
    this.hour = this.hour + hours;
    console.log(this.hour);
  }
};
console.log(time);
time.showTime();
time.setSeconds(20);
time.setMinutes(10);
time.setHours(3);