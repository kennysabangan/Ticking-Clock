const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
           new Date().getMinutes() * 60 + 
           new Date().getHours() * 3600;
}
      
function updateClock() {
    var time = getSecondsSinceStartOfDay();

    var secondsHand = (360 / 60) * time + 180;
    seconds.style.transform = `rotate(${secondsHand}deg)`;

    var minutesHand = (360 / 60) * Math.floor(time / 3600 * 60) + 180;
    minutes.style.transform = `rotate(${minutesHand}deg)`;

    var hoursHand = (360 / 12) * Math.floor(time / 3600) + 180;
    hours.style.transform = `rotate(${hoursHand}deg)`;
}

updateClock();
setInterval(updateClock, 1000);