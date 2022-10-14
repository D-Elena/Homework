// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
// обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:

// 1)Метод, який виводить на екран інформацію про автомобіль.
// 2)Додавання ім’я водія у список
// 3)Перевірка водія на наявність його ім’я у списку
// 4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

let car = {
    manufacturer: 'bmw',
    model: 'M440ix',
    year: '2021',
    speed: '180',
    tank: '59',
    fuelAverage: '9',
    drivers: ['Lena'],
    infoCar: function () {
        console.log(`Виробник: ${this.manufacturer}, модель: ${this.model}, рік випуску: ${this.year}, середня швидкість: ${this.speed}, обсяг паливного баку: ${this.tank}, середня витрата палива на 100 км: ${this.fuelAverage}, водії: ${this.drivers}`);
    },
    addDrivers: function (driver) {
        this.drivers.push(driver);
        console.log(this.drivers);
    },
    userDistance: function (distance) {
        let distanceArg = distance / 100 * this.fuelAverage;
        let timeArg = parseFloat(distance / this.speed)

        if (timeArg >= 4) {
            let restTime = Math.trunc(timeArg / 4);
            timeArg = timeArg + restTime;
        }

        console.log(`Кількість палива ${distanceArg}, час ${(timeArg * 60).toFixed(0)}`);
        console.log(timeArg);
    }
}

car.infoCar();

car.addDrivers('my husband');

car.userDistance(800);




// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1)Для виведення часу на екран.
// 2)Зміни часу на передану кількість секунд.
// 3)Зміни часу на передану кількість хвилин.
// 4)Зміни часу на передану кількість годин.
// 5)Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, 
// то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
    hour: 1,
    minutes: 20, 
    seconds: 30,
    showTime: function() {
        console.log(`Time: ${this.hour} : ${this.minutes} : ${this.seconds}`);
    },
    setSeconds: function(seconds) {
        this.seconds = this.seconds + seconds;
        console.log(this.seconds);
    },
    setMinutes: function(minutes) {
        this.minutes = this.minutes + minutes;
        console.log(this.minutes);
    },
    setHours: function(hours) {
        this.hour = this.hour + hours;
        console.log(this.hour);
    }
}

console.log(time);
time.showTime()
time.setSeconds(20)
time.setMinutes(10)
time.setHours(3)


