// - є масив
//   let simpsons = [
//       {
//           name: 'Bart',
//           surname: 'Simpson',
//           age: 10,
//           info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//           photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//       },
//       {
//           name: 'Homer',
//           surname: 'Simpson',
//           age: 40,
//           info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//           photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//       },
//       {
//           name: 'Marge',
//           surname: 'Simpson',
//           age: 38,
//           info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//           photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//       },
//       {
//           name: 'Lisa',
//           surname: 'Simpson',
//           age: 9,
//           info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//           photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//       },
//       {
//           name: 'Maggie',
//           surname: 'Simpson',
//           age: 1,
//           info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//           photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//       },
//   ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними
// з об'єкту. Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з
// цього об'єкту.

// for (const simpson of simpsons) {
//      let divSimp = document.createElement('div');
//      divSimp.classList.add('member');
//
//      divSimp.innerHTML = `${simpson.name} ${simpson.surname} ${simpson.age} ${simpson.info}`;
//
//      let divImg = document.createElement('img');
//      divImg.src = `${simpson.photo}`
//
//
//      document.body.append(divSimp,divImg);
//
//  }

// Цикл в циклі
// - Є масив
//  let coursesArray = [
//      {
//          title: 'JavaScript Complex',
//          monthDuration: 5,
//          hourDuration: 909,
//          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//      },
//      {
//          title: 'Java Complex',
//          monthDuration: 6,
//          hourDuration: 909,
//          modules: ['html',
//              'css',
//              'js',
//              'mysql',
//              'mongodb',
//              'angular',
//              'aws',
//              'docker',
//              'git',
//              'java core',
//              'java advanced']
//      },
//      {
//          title: 'Python Complex',
//          monthDuration: 6,
//          hourDuration: 909,
//          modules: ['html',
//              'css',
//              'js',
//              'mysql',
//              'mongodb',
//              'angular',
//              'aws',
//              'docker',
//              'python core',
//              'python advanced']
//      },
//      {
//          title: 'QA Complex',
//          monthDuration: 4,
//          hourDuration: 909,
//          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//      },
//      {
//          title: 'FullStack',
//          monthDuration: 7,
//          hourDuration: 909,
//          modules: ['html',
//              'css',
//              'js',
//              'mysql',
//              'mongodb',
//              'react',
//              'angular',
//              'aws',
//              'docker',
//              'git',
//              'node.js',
//              'python',
//              'java']
//      },
//
//      {
//          title: 'Frontend',
//          monthDuration: 4,
//          hourDuration: 909,
//          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//      }
//  ];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// for (const item of coursesArray) {
//
//     let mainDiv = document.createElement('div')
//     document.body.append(mainDiv);
//
//     let title = document.createElement('div')
//     title.innerText = `${item.title}`;
//     mainDiv.append(title)
//
//     let hourDuration = document.createElement('div')
//     hourDuration.innerText = `${item.hourDuration}`;
//     mainDiv.append(hourDuration);
//
//     let monthDuration = document.createElement('div')
//     monthDuration.innerText =`${item.title}`;
//     mainDiv.append(monthDuration);
//
//     let ulDiv = document.createElement('ul')
//     mainDiv.append(ulDiv)
//
//     for (const itemElement of item.modules) {
//         let liDiv = document.createElement('li')
//         liDiv.innerText = `${itemElement}`
//         ulDiv.append(liDiv)
//
//     }
//
// }

// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div')
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// div.innerText = 'Hello';
// div.style.background = 'pink';
// div.style.color = 'white';
// div.style.fontSize = '35';
// document.body.append(div);
// document.body.append(div.cloneNode(true))

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та
// додає його до блоку .menu. Завдання робити через цикли.

// const arr = ['Main','Products','About us','Contacts'];
// let ul = document.getElementsByClassName('menu')[0];
//
// for (const ulElement of arr ) {
//     let li = document.createElement('li')
//     li.innerText = `${ulElement}`;
//     ul.append(li);
// }

// - Є масив
//  let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//     let divOne = document.createElement('div')
//     divOne.classList.add('elements');
//
//     divOne.innerHTML = `${item.title} - ${item.monthDuration}`
//     document.body.append(divOne);
//
// }

// - Є масив
//  let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'> з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// for (const array of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     document.body.append(divElement);
//
//     let h1Element = document.createElement('h1')
//     h1Element.classList.add('heading');
//     document.body.append(h1Element);
//     h1Element.innerHTML = `${array.title}`;
//
//     let pElement = document.createElement('p')
//     pElement.classList.add('description');
//     pElement.innerHTML = `${array.monthDuration}`;
//     document.body.append(pElement);
// }

// -----------
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні
//     на кнопку зникав елемент з id="text"

// let array = document.createElement('div');
// array.innerText = 'Hello';
// array.setAttribute('id', 'text');
//
// let button = document.createElement('button')
// button.innerText = 'Click';
// document.body.append(array, button);
//
// button.onclick = function () {
//     array.style.display = 'none';
// }


//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати
//  інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача.
// let divInput = document.createElement('input');
// let divButton = document.createElement('button');
// divButton.innerText = 'Click here';
//
// document.body.append(divInput, divButton);
//
// divButton.onclick = () => {
//     divInput.oninput;
//     if (divInput.value < 18 ) {
//         alert('So young')
//     } else if (divInput.value > 18 ) {
//         alert('Welcome, friend')
//     }
// }


//*** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let oneInput = document.createElement('input');

let twoInput = document.createElement('input');

let threeInput = document.createElement('input');


let oneButton = document.createElement('button');
oneButton.innerText = 'Click';
document.body.append(oneInput, twoInput, threeInput, oneButton);

oneButton.onclick = () => {
    let text1 = oneInput.value;
    let text2 = twoInput.value;
    let text3 = threeInput.value;

    const createTable = (raws, columns, word) => {
        let oneTable = document.createElement('table');
        oneTable.style.border = `2px solid black`;
        document.body.append(oneTable);

        for (let i = 0; i < raws; i++) {
            let raw = document.createElement('text1')
            oneTable.append(raw);

            for (let j = 0; j < columns; j++) {
                let column = document.createElement('text2')
                column.innerText = `${word}`;
                column.style.border = `2px solid black`;
                raw.append(column);
            }
        }
    }
    createTable(text1, text2, text3)
}




// (Додатковачастина для завдання)
// 10 tasks
// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів вивести їх id + name списком
// // та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)