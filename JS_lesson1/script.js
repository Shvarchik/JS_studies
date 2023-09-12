console.log("Текст из script.js!");

let num = 123;
console.log(num);
let a = 5;
console.log(a + 2);
let b;
b = 1 + 2 + 3;
console.log(b);

let c = 10;
let d = 2;
let sum = c + d;
let diff = c - d;
let prod = c * d;
let quot = c / d;
console.log(`sum = ${sum}
diff = ${diff}
prod = ${prod}
quot = ${quot}
Сумма всех чисел = ${sum + diff + prod + quot}`);

a = 1.5;
b = 0.75;
console.log(a + b);
console.log(-a);
c = 0.1 * 0.2;
console.log(c); // 0.0200000..04


/**
 * функция округления числа
 * @param {number} value - округляемое число
 * @param {number} decimals - требуемое число знаков после запятой 
 * @returns value, округленное до decimals знаков после запятой 
 */

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
console.log(round(c, 2));

let firstName = "Inna";
let secondName = "Shvarts";
console.log(firstName, secondName); // выведет через пробел
let var1 = "java";
let var2 = "script";
console.log(var1 + var2); // склейка
let varHello = "Hello";
let varWorld = "world";
console.log(`${varHello} ${varWorld}`);
console.log(varHello + ' ' + varWorld);

