"use strict";

// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. 
// При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
// При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
document.addEventListener('keydown', function (e) {
  if (e.code == 'KeyE' && (e.ctrlKey || e.metaKey)) {
    var divArea = document.getElementById('textarea');
    var text = divArea.innerText;
    var textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.innerText = text;
    divArea.remove();
    textArea.id = 'textarea';
    e.preventDefault();
  }

  if (e.code == 'KeyS' && (e.ctrlKey || e.metaKey)) {
    var _textArea = document.getElementById('textarea');

    var _text = _textArea.value;

    var _divArea = document.createElement('div');

    document.body.appendChild(_divArea);
    _divArea.innerText = _text;

    _textArea.remove();

    _divArea.id = 'textarea';
    e.preventDefault();
  }
}); // Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
// Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

var schoolMykolayiv = [{
  adress: 'Melnichnaya',
  cost: 200,
  homeDistance: 7
}, {
  adress: 'Starova',
  cost: 300,
  homeDistance: 1
}, {
  adress: 'Shkolnaya',
  cost: 100,
  homeDistance: 4
}, {
  adress: 'Admiralskaya',
  cost: 400,
  homeDistance: 11
}];

function generateTable() {
  schoolMykolayiv.forEach(function (el) {
    var div = document.createElement('div');
    div.classList.add('row', 'school');
    var adressSpan = document.createElement('span');
    var costSpan = document.createElement('span');
    var homeDistanceSpan = document.createElement('span');
    adressSpan.textContent = el.adress;
    costSpan.textContent = el.cost;
    homeDistanceSpan.textContent = el.homeDistance;
    div.append(adressSpan);
    div.append(costSpan);
    div.append(homeDistanceSpan);
    document.querySelector('.table').append(div);
  });
}

var sortHeader = document.querySelectorAll('.sortHeader');
sortHeader.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var targetItem = e.target;
    var sortHeader = targetItem.dataset.sort;

    if (sortHeader == 'adress') {
      schoolMykolayiv.sort(function (a, b) {
        return a.adress < b.adress ? -1 : 1;
      });
    }

    if (sortHeader == 'cost') {
      schoolMykolayiv.sort(function (a, b) {
        return a.cost - b.cost;
      });
    }

    if (sortHeader == 'homeDistance') {
      schoolMykolayiv.sort(function (a, b) {
        return a.homeDistance - b.homeDistance;
      });
    }

    document.querySelectorAll('.school').forEach(function (x) {
      return x.remove();
    });
    generateTable();
  });
});
generateTable();