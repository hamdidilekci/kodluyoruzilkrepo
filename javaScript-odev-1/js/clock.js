let userName = prompt("Lütfen Kullanıcı Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = userName

let current = new Date()
let myClock = document.querySelector("#myClock")
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
myClock.innerHTML = `${current.getHours()}:${current.getMinutes()} ${days[current.getDay()]}`