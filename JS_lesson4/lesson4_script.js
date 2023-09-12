// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.

const arr = [1, 2, 3];
arr.forEach(item => console.log(item));

console.log(arr.length);

const arr1 = ['a', 'b', 'c'];
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = i + 1;

}
arr1.forEach(item => console.log(item));

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.
// 2. Узнайте длину следующего массива:
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// 3. Пусть дан такой массив: // const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
// 4. Создайте произвольный массив из 5 элементов, Удалите из него два
// элемента. Проверьте, какое станет значение свойства length после этого.

for (let i = 0; i < arr.length; i++) {
    arr[i]++
}
console.log(arr);

const arr2 = [];
arr2[3] = 'a';
arr2[8] = 'b';
console.log(arr2.length); // 9

const arr3 = [1, 2, 3];
arr3.splice(arr3.length, 0, 4, 5); // добавить в конец элементы 4 и 5
console.log(arr3, arr3.length);

arr3.splice(arr3.length - 2, 2); // удалить два последних элемента
console.log(arr3, arr3.length);

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// 2. С помощью цикла for выведите в консоль нечетные числа в
// промежутке от 1 до 99.
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// 4. Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого.

let output = '';
for (let index = 11; index < 34; index++) {
    output += index + ' '
}
console.log(output);

output = '';
for (let index = 1; index < 100; index += 2) {
    output += index + ' ';
}
console.log(output);

output = '';
for (let index = 100; index >= 0; index--) {
    output += index + ' '
}
console.log(output);

let num = 5;
let i = 0;
while (num <= 1000) {
    num *= 3;
    i++;
}
console.log(num, i);

// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но
// меньше 10.
// 2. Найдите сумму четных чисел от 2 до 100.
// 3. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// 5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

const arr4 = [2, 5, 9, 15, 1, 4];
arr4.forEach(element => {
    if (element > 3 && element < 10)
        console.log(element)
});

let sum = 0;
for (let i = 0; i <= 100; i += 2) {
    sum += i;
}
console.log(sum);

const arr5 = [2, 5, 9, 3, 1, 4];
const sumArray = arr => {
    let sum = 0;
    arr.forEach(element => { sum += element });
    return sum;
}
console.log(sumArray(arr5));

let str = '-';
for (let i = 0; i < 10; i++) {
    str += `${i}-`;
}
console.log(str);

const arr6 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; arr6[i] !== 0; i++) {
    console.log(arr6[i]);
}

// 1. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами.
// Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль,
// а числа, которые делятся на 3, возведем в куб и выведем в консоль.

// 2. С помощью двух вложенных циклов выведите на экран следующую
// строку:[1,2,3]
//        [4,5,6]

// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

// 4. Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

const arr7 = [];
for (let i = 0; i < 10; i++) {
    arr7[i] = Math.floor(Math.random() * 10);
}
console.log(arr7);
const toExp = (num, degree) => console.log(Math.pow(num, degree))
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 === 0)
        toExp(arr7[i], 2);
    if (arr7[i] % 3 === 0)
        toExp(arr7[i], 3);
}

let arrayRows = [];
arrayRows.length = 2;
let arrayColumns = [];
arrayColumns.length = 3;

for (let i = 0; i < arrayRows.length; i++) {
    for (let j = 0; j < arrayColumns.length; j++) {
        arrayColumns[j] = i * 3 + j + 1;
    }
    arrayRows[i] = arrayColumns.slice();
}
for (i = 0; i < arrayRows.length; i++) {
    console.log(arrayRows[i]);
}


const arr8 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let amount = 0;
arr8.forEach(item => {
    ((item === 3) ? amount++ : null)
});
console.log(`В массиве ${amount} цифр 3`);

const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

