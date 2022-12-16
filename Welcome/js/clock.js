let userName = prompt("Adınızı yazınız.");
let myName = document.querySelector("#myName");
myName.innerHTML = `${userName}`;

function showClock(){
    const day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    let weekDays = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let weekday = weekDays[day.getDay()];
    document.getElementById('myClock').innerHTML = hour + ":" + minute + ":" + second + " " + weekday;
}
showClock();
setInterval(showClock,1000);