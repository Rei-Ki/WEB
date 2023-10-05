var arr = [];
for(let i = 0; i < 20; i+=2) {
    arr.push(i);
}
console.log(arr);

var arr = [];
for(let i = 30; i > 0; i--) {
    if(i%3 == 0) {
        arr.push(i);
    }
}
console.log(arr);

var arr = [2,5,6,8,4,9,12,14,11,13,16,15,18];
var count = 0;
for(let i = 0; i< arr.length; i++) {
    if(arr[i]%2 == 0) {
        count++;
    }
}
alert(count);
