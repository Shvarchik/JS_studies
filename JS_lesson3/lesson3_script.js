// //1.Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с
// // возрастом 17" (только здесь данные, которые были переданы в функцию)

let newUser = {
    firstName: prompt('Ваше имя', 'Иван'),
    secondName: prompt('Ваша фамилия', 'Иванов'),
    surName: prompt('Ваше Отчество', 'Иваныч'),
    age: prompt('Ваш возраст', '0')
};

function sayHelloUser(user) {
    alert(`Привет, ${user.secondName} ${user.firstName} ${user.surName} c возрастом ${Number(user.age)}`);
}

sayHelloUser(newUser);

// //2. Создайте функцию которая возводит переданное число в квадрат

let myNum = 3
const square = num => Math.pow(num, 2);
console.log(square(myNum));

// // 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или
// // отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// // с использованием Function Expression

let check = num => console.log((+num >= 0) ? '+++' : '---');
check(myNum);

// c использованием Function Declaration

function check1(num) {
    console.log((+num >= 0) ? '1+++' : '1---');
}
check1(myNum);

//4. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

let param1 = 1;
let param2 = 2;
let param3 = 3;
let sum = (num1, num2, num3) => console.log(num1 + num2 + num3);
sum(param1, param2, param3);

//5. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой
//функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

const sqrt = num => Math.sqrt(num);
const summa = (param1, param2, func) => func(param1) + func(param2);

console.log(summa(3, 4, sqrt));



//6. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

let weekDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const dayOfWeek = (num) => weekDays[+num - 1];
console.log(dayOfWeek(prompt('введите число от 1 до 7', 5)));

console.log(`сегодня ${dayOfWeek(new Date().getDay())}`)

//7. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)


function greetingWithTimeOfDay(name) {
    let hour = new Date().getHours();
    let greeting;
    if (hour >= 6 && hour < 12) greeting = 'Доброе утро';
    else if (hour >= 12 && hour <= 19) greeting = 'Добрый день';
    else if (hour > 19 && hour < 23) greeting = 'Добрый вечер';
    else greeting = ('Доброй ночи');
    return (`${greeting}, ${name}`);
}

alert(greetingWithTimeOfDay('Инна'));

// 8. Написать функцию, в которую передаем два аргумента - загадку и ответ на нее
// необходимо сравнить ответ пользователя и вернуть true или false
// если пользователь ответил неверно - добавить подсказку

function askQuestion(question, answer, clue) {
    let userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) alert('Угадал!')
    else {
        userAnswer = prompt(`Подсказка: ${clue}`);
        alert((userAnswer.toLowerCase() === answer) ? 'Угадал!' : 'Не угадал((');
    }
}

function puzzle() {
    askQuestion('Зимой и летом одним цветом', 'елка', 'такое колючее дерево');
    askQuestion('Сто одёжек, все без застёжек', 'капуста', 'растет на грядке');
}


