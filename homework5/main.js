// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a,b) => a*b;
// console.log(square(10, 10));

// 2. створити функцію яка обчислює та повертає площу кола з радіусом r
//  let squareCircle = (r) => Math.PI * Math.pow(r,2);
//  console.log(squareCircle(5));

// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//  let squareCylinder = (h,r) => Math.PI * Math.pow (r, 2) * h;
//  console.log(squareCylinder(5, 2));

// 4. створити функцію яка приймає масив та виводить кожен його елемент
//  let arr =[5,2,50];
//  function printer (array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
//     printer(arr);

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
//  function  addHTML(text) {
//      document.write(`<p>${text}</p>`);
//  }
//  addHTML('hello');

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  function asd (text) {
//     document.write(`
//  <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//  </ul>
//     `);
//  }
//  asd('hello')

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//  function abc(text,num) {
//      document.write(`<ul>`);
//      for (let i = 0; i < num; i++); {
//          document.write(`<li>${text}</li>`);
//      }
//
//      document.write(`</ul>`)
//  }
//
//  abc('hello', 3);

// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [2,6,true,'text'];
// const elem = function (array){
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`<ul>`)
//
// }
// elem(arr);

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//  let arr = [
//          {
//      name: 'Anna',
//      id: 2585,
//      age: 25,
//      },
//      {
//          name: 'Inna',
//          id: 2655,
//          age: 26,
//      }
//  ]
// const users = function (array) {
//     for (const user of array) {
//         document.write(`<div><p>${user.name} ${user.id} ${user.age}</p></div>`)
//     }
// }
// users(arr);


// 10. створити функцію яка повертає найменьше число з масиву
// let arr = [1,2,10]
// function abc(array){
//     let min = array [0]
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
//
// console.log(abc(arr));

// 11. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//  Приклад [1,2,10]->13
// let arr = [1,2,10]
//  function abc(array) {
//      let sum = 0;
//      for (const item of array) {
//          sum += item;
//          }
//      return sum;
// }
//
// console.log(abc(arr));
// or
//  function calc(){
//      if(arguments.length === 2){
//          return arguments[0] + arguments[1];
//      } else if (arguments.length === 3){
//          return arguments[0] - arguments[1] - arguments[2];
//      }
//          return 0;
//
//  }
//
//  console.log(calc(5, 5));
//  console.log(calc(10, 10)) ;