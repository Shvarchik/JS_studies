// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// const week = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье',
//     showDay(key) { console.log(this[key]) }
// }

// function show(key) {
//     console.log(this[key]);
// }
// week.f = show;
// week.f(1);

// week.showDay(2);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

// const user = {
//     name: 'Иван',
//     surname: 'Иванов',
//     age: 35
// };

// console.log(`${user.surname}-${user.name}-${user.age}`);
// user.patronym = prompt('Введите отчество', '');
// delete user.surname;

// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.


// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const weekDays = {};
// for (let i = 0; i < arr1.length; i++) {
//     weekDays[arr1[i]] = arr2[i];
// }
// console.log(weekDays);


// 1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

// const obj = { x: 1, y: 2, z: 3 }
// for (const key in obj) {
//     obj[key] = Math.pow(obj[key], 2)
// }
// console.log(obj);

// Найдите сумму элементов приведенного объекта.

// const obj1 = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     }
// }

// превращаем в массив объектов, делаем его одноразмерным с помощью flatMap (map: каждый объект внутри внешнего массива тоже превращаем в массив).

// const newArr = Object.values(obj1).flatMap((item) => Object.values(item));
// console.log(newArr);
// const sum = newArr.reduce((sum, current) => sum + current, 0);
// console.log(sum);

// с помощью перебора значений в цикле

// let sum = 0;
// for (const keyI in obj1) {
//     for (const keyJ in obj1[keyI]) {
//         sum += obj1[keyI][keyJ];
//     }
// }
// console.log(sum);

// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

// const riddles = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'елка',
//     clue: ['вечнозеленое дерво', 'колючая'],
//     askQuestion: function () {
//         let userAnswer = prompt(this.question);
//         if (userAnswer.toLowerCase() === this.answer) alert('Угадал!')
//         else {
//             for (let i = 0; i < this.clue.length; i++) {
//                 userAnswer = prompt(`Не угадал. Подсказка: ${this.clue[i]}`);
//                 if (userAnswer.toLowerCase() === this.answer) {
//                     alert('Угадал!');
//                     return;
//                 }
//             }
//             alert('Так и не угадал((');
//         }
//     }
// }

// riddles.askQuestion();
