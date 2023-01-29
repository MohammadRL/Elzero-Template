let statsHolder = document.querySelector(".stats");
let statsNumbers = document.querySelectorAll(".stats .num");
/*Start Skills Progress*/
let skillsHolder = document.querySelector(".skills");
let progressVal = document.querySelectorAll(".skills .skill>span");
let skillsBar = document.querySelectorAll(".skills .skill .prog span");

/*  Start Event Count Down Timer*/
let eventDate = new Date("31 Dec 2023 00:59:59").getTime();
let counter = setInterval(() => {
  let currentDate = new Date().getTime();
  let dateDiff = eventDate - currentDate;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".full-time:first-of-type .num").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".full-time:nth-of-type(2) .num").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".full-time:nth-of-type(3) .num").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".full-time:nth-of-type(4) .num").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff === 0) {
    clearInterval(counter);
  }
}, 1000);
/*  End Event Count Down Timer*/
let start = false;
let skillStart = false;
//Incresing statistics Numbers When Scrolling
window.onscroll = () => {
  //Increasing Skills Bar Width 
  if (window.scrollY >= skillsHolder.offsetTop) {
    if (!start) {
      for (let i = 0; i < progressVal.length; i++) {
        skillsBar[i].style.width = `${parseInt(progressVal[i].textContent)}%`;
      }
      skillStart = true;
    }
  }
  if (window.scrollY >= statsHolder.offsetTop) {
    if (!start) {
      statsNumbers.forEach(element => increaseNumbers(element));
      start = true;
    }
  }
}
function increaseNumbers(stat) {
  let goal = stat.dataset.goal;
  let counter = setInterval(() => {
    stat.textContent++;
    if (stat.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
