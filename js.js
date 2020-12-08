const secDate = document.querySelector(".clock_sec")
const minDate = document.querySelector(".clock_min")
const hourDate = document.querySelector(".clock_hour")

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360 + 90);
    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360 + 90);
    const hour = now.getHours();
    const hourDeg = ((hour / 60) * 360 + 90);
    secDate.style.transform = `rotate(${secDeg}deg)`;
    minDate.style.transform = `rotate(${minDeg}deg)`;
    hourDate.style.transform = `rotate(${hourDeg}deg)`;


}

setInterval(setDate, 1000);