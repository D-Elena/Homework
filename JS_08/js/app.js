// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. 
// При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
// При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.



document.addEventListener('keydown', function(e) {
    
    if (e.code == 'KeyE' && (e.ctrlKey || e.metaKey)) {
        let divArea = document.getElementById('textarea');
        let text = divArea.innerText;
        let textArea = document.createElement('textarea');
        document.body.appendChild(textArea);
        textArea.innerText = text;
        divArea.remove();
        textArea.id = 'textarea';
        e.preventDefault();
    }
    if (e.code == 'KeyS' && (e.ctrlKey || e.metaKey)) {
        let textArea = document.getElementById('textarea');
        let text = textArea.value;
        let divArea = document.createElement('div');
        document.body.appendChild(divArea);
        divArea.innerText = text;
        textArea.remove();
        divArea.id = 'textarea';
        e.preventDefault();
    }
})


// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
// Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.


const schoolMykolayiv = [
    {
        adress: 'Melnichnaya',
        cost: 200,
        homeDistance: 7
    },
    {
        adress: 'Starova',
        cost: 300,
        homeDistance: 1
    },
    {
        adress: 'Shkolnaya',
        cost: 100,
        homeDistance: 4
    },
    {
        adress: 'Admiralskaya',
        cost: 400,
        homeDistance: 11
    }
];

function generateTable() {
    schoolMykolayiv.forEach(el => {
        const div = document.createElement('div');
        div.classList.add('row','school');

        const adressSpan = document.createElement('span');
        const costSpan = document.createElement('span');
        const homeDistanceSpan = document.createElement('span');

        adressSpan.textContent = el.adress;
        costSpan.textContent = el.cost;
        homeDistanceSpan.textContent = el.homeDistance;


        div.append(adressSpan);
        div.append(costSpan);
        div.append(homeDistanceSpan);

        document.querySelector('.table').append(div);

    })
}

const sortHeader = document.querySelectorAll('.sortHeader');
sortHeader.forEach(el => {
    el.addEventListener('click', function(e) {
        const targetItem = e.target;
        const sortHeader = targetItem.dataset.sort;
        if(sortHeader == 'adress') {
            schoolMykolayiv.sort((a, b) => {
                return a.adress < b.adress ? -1 : 1;
            })
        }
        if(sortHeader == 'cost') {
            schoolMykolayiv.sort((a, b) => {
                return a.cost - b.cost;
            })
        }
        if(sortHeader == 'homeDistance') {
            schoolMykolayiv.sort((a, b) => {
                return a.homeDistance - b.homeDistance;
            })
        }
        document.querySelectorAll('.school').forEach(x => x.remove());
        generateTable();
        
    })
});

generateTable();