const timecontainer = document.querySelector(".timetable");
    clocktitle = timecontainer.querySelector("span");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds =date.getSeconds();
    clocktitle.innerText =`${hours < 0 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 0 ? `0${seconds}`:seconds}`;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}
init();
