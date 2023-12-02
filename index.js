// var countDownDate = new Date("Dec 7, 2023 12:00:00").getTime();
let countDownDate;

const allEpsSchedule = {
  20: "Dec 7, 2023 12:00:00",
  21: "Dec 14, 2023 12:00:00",
  22: "Dec 21, 2023 12:00:00",
  23: "Dec 28, 2023 12:00:00",
};

// Update the count down every 1 second
var x = setInterval(function () {
  if (new Date("Dec 7, 2023 12:00:00").getTime() > new Date().getTime()) {
    countDownDate = new Date("Dec 7, 2023 12:00:00").getTime();
  } else if (
    new Date("Dec 14, 2023 12:00:00").getTime() > new Date().getTime()
  ) {
    countDownDate = new Date("Dec 14, 2023 12:00:00").getTime();
  } else if (
    new Date("Dec 21, 2023 12:00:00").getTime() > new Date().getTime()
  ) {
    countDownDate = new Date("Dec 21, 2023 12:00:00").getTime();
  } else if (
    new Date("Dec 28, 2023 12:00:00").getTime() > new Date().getTime()
  ) {
    countDownDate = new Date("Dec 28, 2023 12:00:00").getTime();
  }

  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("remainingTime").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("remainingTime").innerHTML = "EXPIRED";
  }
}, 1000);
