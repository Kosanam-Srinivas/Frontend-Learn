const hourE1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minutes")
const secondsE1 = document.getElementById("seconds")
const ampmE1 = document.getElementById("ampm")
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = (h >= 12) ? "PM" : "AM";

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondsE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    },1000)   
}
updateClock();