let alarmTime = null;
let alarmSound = document.getElementById("alarm-sound");
let statusElement = document.getElementById("status");

function setAlarm() {
  const alarmInput = document.getElementById("alarm-time").value;
  if (!alarmInput) {
    alert("Please set a valid alarm time.");
    return;
  }

  alarmTime = alarmInput;
  statusElement.textContent = `Alarm set for: ${alarmTime}`;
  checkTime();
}

function checkTime() {
  setInterval(function () {
    let currentTime = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });

    if (currentTime === alarmTime) {
      alarmSound.play();
      statusElement.textContent = "Time's up! Alarm ringing!";
    }
  }, 1000);
}
