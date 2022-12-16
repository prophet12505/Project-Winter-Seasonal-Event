// Set the target date we're counting down to
let countDownDate = new Date("December 16, 2023 23:59:00").getTime();
// console.log(countDownDate);

// Calculate the days, hours, minutes and seconds to target date & time
function countDown() {

  // Get today's date and time
  let now = new Date().getTime();
  // console.log(now);

  // Find the difference between now and the count down date
  let difference = countDownDate - now;
  // console.log(difference);

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(difference / 86400000);  // 86,400,000 milliseconds
  let hours = Math.floor((difference % 86400000) / 3600000);
  let minutes = Math.floor((difference % 3600000) / 60000);
  let seconds = Math.floor((difference % 60000) / 1000);

  // Output the result to the placeholders
  document.getElementById("days").innerHTML = fixZero(days);
  document.getElementById("hours").innerHTML = fixZero(hours);
  document.getElementById("minutes").innerHTML = fixZero(minutes);
  document.getElementById("seconds").innerHTML = fixZero(seconds);

  if (days === 1) {
    document.getElementById("dayslbl").innerHTML = "Day";
  } else {
    document.getElementById("dayslbl").innerHTML = "Days";
  }
  if (hours === 1) {
    document.getElementById("hourslbl").innerHTML = "Hour";
  } else {
    document.getElementById("hourslbl").innerHTML = "Hours";
  }
  if (minutes === 1) {
    document.getElementById("minuteslbl").innerHTML = "Minute";
  } else {
    document.getElementById("minuteslbl").innerHTML = "Minutes";
  }
  if (seconds === 1) {
    document.getElementById("secondslbl").innerHTML = "Second";
  } else {
    document.getElementById("secondslbl").innerHTML = "Seconds";
  }

  if (days < 1 && (hours < 12 || minutes < 0 || seconds < 60)) {
    document.getElementById("timer").style.color = "darkred";
    document.getElementById("timer").style.textShadow = "0 0 5px white";
  }

  // If the count down is over, stop the timer and write some text
  if (difference <= 0) {
    clearInterval(startCountDown); // stop setInterval function
    // document.getElementById("intro").innerHTML = "Westman Winterfest 2022 begins...",
    document.getElementById("timer").innerHTML = "â„ RIGHT NOW! ðŸ›·";
  }

}

function fixZero(data) {
  if (data < 10) {
    data = "0" + data;
  }
  return data;
}

let startCountDown = setInterval(countDown, 500); // Start countdown and update every 1 second
