"use strict";

//Створити сторінку, що показує нумерований список пісень:
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var domNav = document.getElementById('song');
playList.forEach(function (navItem) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = navItem.song;
  a.setAttribute('href', navItem.url);
  a.setAttribute('target', '_blank');
  li.appendChild(a);
  domNav.appendChild(li);
}); //Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". 
//Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

function showModal() {
  document.querySelector('.modal').classList.add('open');
}

function closeModal() {
  document.querySelector('.modal').classList.remove('open');
} //Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.


function switchLight() {
  var red = document.querySelector('.lightbulb.red');
  var yellow = document.querySelector('.lightbulb.yellow');
  var green = document.querySelector('.lightbulb.green');

  if (red.classList.contains('active')) {
    //если красный актив
    red.classList.remove('active'); //удаляю цвет

    yellow.classList.add('active'); //добавляю желтый
  } else if (yellow.classList.contains('active')) {
    yellow.classList.remove('active');
    green.classList.add('active');
  } else {
    green.classList.remove('active');
    red.classList.add('active');
  }
}