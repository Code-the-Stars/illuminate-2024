// Get the countdown element
var countdownElement = document.querySelector('#countdown');

// Set the date we're counting down to
var countDownDate = new Date("Jun 7, 2024 18:00:00").getTime();

// Update the count down every 1 second
var countdownInterval = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "You missed the start! Get to it ASAP!";
  } else {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element
    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
}, 1000);