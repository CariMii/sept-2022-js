// 1. Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// console.log(str.substring(0, 11));
//


// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str ='hello world';
// console.log(str.toUpperCase());

// let str ='lorem ipsum';
// console.log(str.toUpperCase());

// let str ='javascript is cool';
// console.log(str.toUpperCase());


// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

 // let str ='HELLO WORLD';
 // console.log(str.toLowerCase())

 // let str ='LOREM IPSUM';
 // console.log(str.toLowerCase())

 // let str ='JAVASCRIPT IS COOL';
 // console.log(str.toLowerCase());

// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//  let str = ' dirty string   '
//  console.log(str.trim());

// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//     let str = 'Ревуть воли як ясла повні';
//     let string = str.split(' ');
//     console.log(string);

// 6. Є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// const arr = [10,8,-7,55,987,-1011,0,1050,0]
// let string = arr.map(value => value.toString());
// console.log(string);

// 7.  створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3]

const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a,b) => a - b);
    } else if (direction === 'descending'); {
        arr.sort((a,b) => b - a);
    }
    return arr;
}
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

// 8. є масив
//   let coursesAndDurationArray = [
//       {title: 'JavaScript Complex', monthDuration: 5},
//       {title: 'Java Complex', monthDuration: 6},
//       {title: 'Python Complex', monthDuration: 6},
//       {title: 'QA Complex', monthDuration: 4},
//       {title: 'FullStack', monthDuration: 7},
//       {title: 'Frontend', monthDuration: 4}
//   ];
// -- відсортувати його за спаданням за monthDuration
//     coursesAndDurationArray.sort((u1, u2) => {
//         return u2.monthDuration - u1.monthDuration;
//     })
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filteredUsers = coursesAndDurationArray.filter(function (value){
//     return value.monthDuration > 5;
// })
// console.log(filteredUsers);

// 9. описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }