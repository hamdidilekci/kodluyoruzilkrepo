let userName = prompt("Lütfen Kullanıcı Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = userName

let current = new Date()
let myClock = document.querySelector("#myClock")
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
myClock.innerHTML = `${current.getHours()}:${current.getMinutes()} ${days[current.getDay()]}`

var userNamem="guest";
var price=1;

console.log(!(price>0 && userNamem=="guest"));

let boolean;
const isBooleanTrue = boolean ? true : false;
console.log(isBooleanTrue)

console.log(boolean)