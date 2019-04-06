'use strict'; // означает, что пишу на ES6

var leftBorderWidth = 1;
let second = 2; // ES6. создается в момент использования
const pi = 3.14; // ES6

// Типы данных

var nu, ber = 5;
var string = "Some text";
var sym = Symbol();
var boolearn = false;
null; // когда в коде чего-то не существует
undefined; // когда обьект существует, но не имеет никакого значения
var obj = {};
// свойтво: ключ и его значение
let persone = {
    name: "John",
    age: 25,
    sisMarried: false
};

console.log(persone["name"]);
console.log(persone.name);


let array = ['plum.png','orange.jpg', 'apple.png'];

console.log(array[0]);

// let ansver = confirm("Are you here?");
// console.log(ansver);


// let ansver = prompt("Have you 18 years?", "Yes"); // string
// let ansver_num = +prompt("Have you 18 years?", "Yes"); // number
// console.log(typeof(ansver));


var incr = 10,
    decr = 10;

    incr++;
    decr--;
    console.log(incr+" + "+decr);


    console.log(5%2);//остаток от деления

    // == проерка равенства
    // === строгая проверка на тип данных



