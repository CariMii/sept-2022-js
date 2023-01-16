// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//  function User (id,name,surname,email,phone) {
//      this.id = id
//      this.name = name
//      this.surname = surname
//      this.email = email
//      this.phone = phone
//      console.log(this)
//  }
//
//  let user1 = new User (1,'vasylyna','vasylynova','vasylyna90@gmail.com',380989090 );
// console.log(user1)
//  let user2 = new User (2,'sonya','sonina','sonina89@gmail.com',3809898989 );
// console.log(user2)
//  let user3 = new User (3,'anya','anina','anina88@gmail.com',3809898888 );
// console.log(user3)
//  let user4 = new User (4,'alla','alova','alova87@gmail.com',3809898787 );
// console.log(user4)
//  let user5 = new User (5,'mila','milina','milina86@gmail.com',3809898686 );
// console.log(user5)
//  let user6 = new User (6,'julia','karpovich','karpovich85@gmail.com',3809898585 );
// console.log(user6)
//  let user7 = new User (7,'karina','karinova','karinova84@gmail.com',3809898484 );
// console.log(user7)
//  let user8 = new User (8,'angelina','angelinova','angelinova83@gmail.com',3809898383 );
// console.log(user8)
//  let user9 = new User (9,'antonina','antoninova','antoninova82@gmail.com',3809898282 );
// console.log(user9)
//  let user10 = new User (10,'afrodita', 'afroditova','afroditova81@gmail.com',3809898181 );
// console.log(user10)
//
// let arr = []
// arr.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(arr)

// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти
// з парними id (filter)

// let foo = arr.filter((val) => val.id%2 === 0)
// console.log(foo)
//
// // 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let ree = arr.sort (function (a,b) {
//     return a.id-b.id
// })
// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом
// зі списком товарів)
// class Client {
//     constructor (id, name, surname, email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//         console.log(this)
//     }
// }
//   let Client1 = new Client (1,'vasylyna','vasylynova','vasylyna90@gmail.com',380989090, 8);
//   console.log(Client1)
//    let Client2 = new Client (2,'sonya','sonina','sonina89@gmail.com',3809898989, 6 );
//   console.log(Client2)
//    let Client3 = new Client (3,'anya','anina','anina88@gmail.com',3809898888, 88 );
//   console.log(Client3)
//    let Client4 = new Client (4,'alla','alova','alova87@gmail.com',3809898787, 2 );
//   console.log(Client4)
//    let Client5 = new Client (5,'mila','milina','milina86@gmail.com',3809898686, 7 );
//   console.log(Client5)
//    let Client6 = new Client (6,'julia','karpovich','karpovich85@gmail.com',3809898585, 78 );
//   console.log(Client6)
//    let Client7 = new Client (7,'karina','karinova','karinova84@gmail.com',3809898484, 3 );
//   console.log(Client7)
//    let Client8 = new Client (8,'angelina','angelinova','angelinova83@gmail.com',3809898383, 4 );
//   console.log(Client8)
//    let Client9 = new Client (9,'antonina','antoninova','antoninova82@gmail.com',3809898282, 9 );
//   console.log(Client9)
//    let Client10 = new Client (10,'afrodita', 'afroditova','afroditova81@gmail.com',3809898181, 61 );
//   console.log(Client10)
//
// let Clients = []
// Clients.push(Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8,Client9,Client10)
// console.log(Clients)
//
// // 5. створити пустий масив, наповнити його 10 об'єктами Client
// // clientsArray.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
// // console.log.(clientsArray)
//
// // 6. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order
// // по зростанню. (sort)
// let prefer = Clients.sort (function (a,b) {
//     return a.order-b.order
// })

// 7. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, producer, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function (){
        for (const argumentsKey in arguments) {
            if(typeof this[argumentsKey] === `function`){
                console.log(`${argumentsKey} ===${this[argumentsKey]}`)
            }
        }
    }
}
this.increaseMaxSpeed = function () {
    for (const argument of arguments) {

    }
}


//
// 8. (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
// об'єкт car
//
//
//
// 9. Створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// function Cinderella (name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//
//     class prince {
//         constructor (name, age, findShoe){
//         for (const nameElement of name) {
//             if{ }
//         }
//     }
//   }
//
//   let Cinderella1 = new Cinderella ('sonya',24,36 );
//  console.log(Cinderella1)
//   let Cinderella2 = new Cinderella ('inna',21,36 );
//  console.log(Cinderella2)
//   let Cinderella3 = new Cinderella ('alla',26,36 );
//  console.log(Cinderella3)
//   let Cinderella4 = new Cinderella ('ahata',58,36 );
//  console.log(Cinderella4)
//   let Cinderella5 = new Cinderella ('anna',64,36 );
//  console.log(Cinderella5)
//   let Cinderella6 = new Cinderella ('khristina',14,36 );
//  console.log(Cinderella6)
//   let Cinderella7 = new Cinderella ('olya',18,36 );
//  console.log(Cinderella7)
//   let Cinderella8 = new Cinderella ('magda',22,36 );
//  console.log(Cinderella8)
//   let Cinderella9 = new Cinderella ('alina',23,36 );
//  console.log(Cinderella9)
//   let Cinderella10 = new Cinderella ('katya',25, 36 );
//     console.log(Cinderella10)
//
//  let wonderfulLife = []
//  wonderfulLife.push(Cinderella1,Cinderella2,Cinderella3,Cinderella4,Cinderella5,Cinderella6,Cinderella7,Cinderella8,Cinderella9,Cinderella10)
//  console.log(wonderfulLife)




//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку