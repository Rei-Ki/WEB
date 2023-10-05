function addt(aString) {
    return aString + "!";
}
console.log(addt('Я стараюсь'));

function textHi(fruit, color, weight) {
    document.write("Мой любимый фрукт - "+fruit+"<br>"+
    "В зрелом виде его цвет - "+color+"<br>"+
    "Я могу сесть "+weight+" кг"+"<br>");
}
textHi("Персик", "красно - желтый", 0.4);

let fruit1 = "apple";
let color1 = "green";
let weight1 = "2";
textHi(fruit1, color1, weight1);

let myNumbers = [2,4,2,7];
let total = 0;
for (number in myNumbers) {
    total += myNumbers[number];
}
document.write(total);


/**
*Сложение элементов массива
*@param {Array. <number>} numbersToAdd
*@return {Number} sum
*/
function addNumbers(numbersToAdd) {
    var sum = 0;
    for (number in numbersToAdd) {
        sum += numbersToAdd[number];
    }
    return sum;
}

var myNumbers = [2,4,2,71];
var myNumbers2 = [3333,222,111];
var myNumbers3 = [777,555,777,555];
var sum1 = addNumbers(myNumbers);
var sum2 = addNumbers(myNumbers2);
var sum3 = addNumbers(myNumbers3);
document.write(sum1 + "<br>");
document.write(sum2 + "<br>");
document.write(sum3 + "<br>");


function getTheDate() {
    var rightNow = newDate();
    document.write(rightNow.toDateString());
}
getTheDate();


// Окончил на конце 7 страницы



