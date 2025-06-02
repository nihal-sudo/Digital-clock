let alarmTime = null;
let alarmTimeout = null;

function updateClock() {
  const now = new Date();
  let h = now.getHours().toString().padStart(2, '0');
  let m = now.getMinutes().toString().padStart(2, '0');
  let s = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}:${s}`;

  if (alarmTime && `${h}:${m}` === alarmTime) {
    triggerAlarm();
  }
}

function setAlarm() {
  const input = document.getElementById('alarmTime').value;
  if (input) {
    alarmTime = input;
    alert('Alarm set for ' + alarmTime);
  }
}

function clearAlarm() {
  alarmTime = null;
  alert('Alarm cleared');
}

function triggerAlarm() {
  alarmTime = null;
  alert('⏰ Alarm! Time is up!');
}

setInterval(updateClock, 1000);
updateClock();function triggerAlarm() {
  alarmTime = null;
  const sound = document.getElementById('alarmSound');
  if (sound) {
    sound.play();
  }
  alert('⏰ Alarm! Time is up!');
}