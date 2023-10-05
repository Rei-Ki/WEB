var animals = ["тигр", "медведь"];
var fruit = ["дыня", "апельсин"];
var dishes = ["тарелка", "бокал", "чашка"];

var whereIsTiger = animals.indexOf("тигр");
var fruitsAndAnimals = fruit.concat(animals);

document.write(animals + "<br/>");
document.write("Индекс тигра: " + whereIsTiger + "<br/>");
document.write(fruitsAndAnimals +  "<br/>");

whereIsTiger = fruitsAndAnimals.indexOf("тигр");
document.write("Индекс тигра: " + whereIsTiger + "<br/>");

let newStr = `Ум изобразить нельзя`;
newStr.slice(3);
newStr.slice(0, 12);

let arr = [15, 21, `summer`, true, 159];
arr.splice(1, 2);
arr.splice(1);

arr.splice(1,0,59,`sun`,false);
arr.splice(2,1,`rain`);
arr.splice(-1,0,666);

arr.includes('rain');
let str1 = "меЛОдИЯ";

str1.toLowerCase();
str1.toUpperCase().trim();

let str2 = str1.toUpperCase().trim();
str2[0].toUpperCase()+str2.slice(1);


let newAnimals = ['cat','dog','parrot','hamster','chicken'];
console.log(newAnimals);
newAnimals.shift();
console.log(newAnimals);
newAnimals.push('cat');
console.log(newAnimals);

newAnimals.pop();
console.log(newAnimals);
newAnimals.unshift('cat');
console.log(newAnimals);

let newAnimals2 = ['rabbit','horse','sheep'];
let res = newAnimals.concat(newAnimals);
console.log(res);
console.log(newAnimals);
console.log(newAnimals2);

var obj = {key1: 200, key2: 300, key2: 400};
alert(obj['key1']);
alert(obj.key1);

var obj = {};
obj['Коля'] = 100;
obj['Вася'] = 200;
obj['Петя'] = 300;

var students = {
    'boys': ["Коля","Вася","Петя"],
    'girls': ["Даша","Маша","Лена"]
};
alert(students.boys[0]);
alert(Object.keys(students));

students['teachers'] = ['Ольга Сергеевна','Олег Дмитриевич'];
alert(students);

let obj2 = [
    {
        'color':'red',
        'age':'24',
        'answer':'yes'
    },
    {
        'color':'green',
        'age':'21',
        'answer':'no'
    },
];

alert(obj2[1].answer);

let [a, b] = prompt().split(' ').map(Number);
//let [a, b] = prompt().split(' ');
let [line, n] = prompt().split(' ');
n = Number(n);
alert(n)
