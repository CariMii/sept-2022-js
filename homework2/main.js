// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = []
arr[0] = 500;
arr[1] = 'black';
arr[10] = 'white';
console.log(arr);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'story',
    pageCount: 350,
    genre: 'comedy',
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: 'melody',
    pageCount: 350,
    genre: 'classic',
    authors: [
        {
          name: 'Ivan',
          age: 25,
        },
        {
           name: 'Maria',
           age: 24,
        },
        {
            name: 'Lina',
            age: 21,
        },
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {
        name: 'Alla',
        username: 'Kovalenko',
        password: 'bird',
    },
    {
        name: 'Katya',
        username: 'Avramenko',
        password: 'king',
    },
    {
        name: 'Nika',
        username: 'Nikomenko',
        password: 'Nik',
    },
    {
        name: 'Denys',
        username: 'Denysenko',
        password: 'Den',
    },
    {
        name: 'Kinga',
        username: 'Kovaliuk',
        password: 'Kov',
    },
    {
        name: 'Paula',
        username: 'Sella',
        password: 'Pal',
    },
    {
        name: 'Alla',
        username: 'Kovalenko',
        password: 'flower',
    },
    {
        name: 'Nadya',
        username: 'Mistrenko',
        password: 'Mirel',
    },
    {
        name: 'Karolina',
        username: 'Moisowa',
        password: 'Moss',
    },
    {
        name: 'Roma',
        username: 'Innev',
        password: 'Rose',
    },
    {
        name: 'Ihor',
        username: 'Ihorov',
        password: 'car',
    },
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
console.log(user[10].password);

