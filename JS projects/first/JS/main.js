// document.write("JavaScript");
//console.info("JS");
//console.log("JS");
//console.error("JS")
//console.warn("JS")
/* Типы данных
var num_1= 5;
var num_2= 5;
var res = num_1 + num_2
console.log(res);
console.log("Сложение " + (num_1 + num_2));
var num_3 = 5;
num_3 += 7;
var str_1 = "12";
var str_2 = "2";
console.log("Результат: " + (Number(str_1)+Number(str_2)))
 */
/* Switch case
var stroka = "word";
switch (stroka){
    case "4":
        console.log("Переменная со значением 4");
        break;
    case "word":
        console.log("Верно!")
}
 */
/*massive
var arr = [5, true, "stroka", 5.7, 0 , -100];
arr[3] = "word";
console.log(arr.length);
var matrix = [
    [4,6,8],
    ["stroka",5.7],
    [0,-100]
];
matrix[1][0] = 90;
console.log(matrix)
 */
/*
for (var i = 100; i >5; i/=2){
    console.log(i);
}
var j =1000
while (j>100) {
    console.log(j)
    j-=100;
}
var x = 100
do {
    console.log(x)
} while (x <50)
 */
/* Диалоговые окна
alert("Точно?");
var data = confirm("Вы дома?")
console.log(data);
prompt ("Скажите сколько лет?")
var person = null;
if (confirm("Are u sure about that?")){
    person = prompt("Write ur name dudeeeeeeeee")
    alert ("Привет, " + person + ".Теперь ты fucking slave")
} else{
    alert ("U are not gacci boi")
}
 */
/* функции
function info (word) {
   return word
}
function summ (a,b){
    var res = a + b;
    return res;
}
function summa (arr) {
    var sum = 0;
    for (var i = 0 ; i<arr.length; i++)
        sum += arr[i];
    alert(sum)
}
var array =[6,8,1];
summa(array)
 */
/* on теги
var counter = 0
function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;
    console.log(el.name)
    el.style.background = "red";
}
function onMouseOver(el){
    console.log(el.value);
}
<button name = "mainButton" onclick="onClickButton(this)">Нажми на меня</button>
    <input oninput="onMouseOver(this)">
 */
/* работа с формой
var text = document.getElementById('222');
console.log(text.id);
var spans = document.getElementsByClassName('simple-text')
for (var i = 0; i < spans.length; i++ ){
    console.log(spans[i].innerHTML);
}
function checkForm(el) {
    var name = el.name.value;
    var pass = el.name.pass;
    var repass = el.name.repass;
    var state = el.state.value;
    var fail = "";
    if (name == "" || pass =="" || state == "")
        fail = "Заполните все поля"
    else if (name.length <= 1 || name.length >50)
        fail = "Введите корректное имя";
    else if (pass != repass)
        fail = "Пароли должны совпадать";
    else if (pass.split("&").length > 1)
        fail = "Некорректный пароль";

    if(fail == "" ){
        return false;
    }else {
        alert("Всё корректно");
        return true;
    }
}
 */
/*
setInterval(my_func, 1000);

var counter
function my_func(){
    counter++;
    console.log(counter);
}
var counter = 0;
setInterval(function (){
    counter++;
    console.log("Счётчик: " + counter)
} ,1000);
 */
/*
class Persson{
    constructor(name,age,happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
}
var alex = new Persson('Alex',45,true)
console.log(alex)
 */
/*Тестовое задание с массивом
const arr = [1,1,1,2,3,4,4,5,7,8,9,7]
function name() {
    const noRepeat = [];
    arr.sort()
    for (let i = 0; i < arr.length;i ++){
        const g = arr[i]
        let counter = 0
        for (let k=0; k < arr.length;k++) {
            if (g === arr[k]) {
                counter +=1;
            }
            }
        if (counter === 1) {
            noRepeat.push(arr[i]);
        }
    }
    return noRepeat;
}
console.log(name(arr));
 */
/*
const objectA ={
    a:10,
    b: true
}
const coppyA = objectA;
coppyA.c = 34;
console.log(objectA)
 */
/* Стрелочная функция
array = [1,2,3,4,5]
const a = (arr) => {
    console.log(arr);
}
a(array)
 */
function isIsogram(str){
   console.log(new Set(str.toUpperCase()).size)
}
isIsogram('abvgdaa')
