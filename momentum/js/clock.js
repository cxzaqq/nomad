const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//바로 한 번 실행
getClock();
//이후 1초마다 실행
setInterval(getClock, 1000);

//String.padStart(2, "0")
//String은 길이가 2여아하고 부족하면 앞에 0으로 채운다