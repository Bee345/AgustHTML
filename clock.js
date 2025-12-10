// Digital Clock
function updateClock(){ 
    const clock = document.getElementById("clock");
    let now = new Date();

    let hrs = String(now.getHours()).padStart(2, "0");
    let mins = String(now.getMinutes()).padStart(2, "0");
    let secs = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hrs}:${mins}:${secs}`;

    // Alarm Clock
    if(alarmTime === `${hrs}:${mins}` && !alarmTriggered){ 
      alarmTriggered = true;
      alarmSound.currentTime = 0;
      alarmSound.play();
      status.textContent = "Alarm Ringing";
    }


    // this is for setting timeout
    setTimeout(() => { 
   alarmSound.pause();
   alarmSound.currentTime = 0;
//    status.textContent = "Alarm Has been Stopped";
    }, 120000)
}
setInterval(updateClock, 1000);

// Alarm Functionality
let alarmTime =  null;
let alarmTriggered = false;

let alarmSound = document.getElementById("alarm-Sound");
let status = document.getElementById("status");


document.getElementById("setAlarmBtn").addEventListener("click", () => { 
    const inputTime = document.getElementById("alarmTime").value;

    if(inputTime){ 
        alarmTime = inputTime;
        alarmTriggered = false;
        status.textContent = " Alarm set for " + alarmTime;
    }else if(!inputTime){ 
        status.textContent = "Please Select a timer";
    }
});
document.getElementById("clearAlarmBtn").addEventListener("click", () => { 
    alarmTime = null;
    alarmTriggered = false;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    status.textContent = "Alarm Cleared";
});