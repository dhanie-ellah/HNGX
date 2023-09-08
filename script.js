let dayOfWeek = document.getElementById("currentDayOfTheWeek");
let currentTime = document.getElementById("currentUTCTime");
const date = new Date;
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// getting the current day and setting it
let Day = date.getDay()
dayOfWeek.innerHTML = weekday[Day];

// getting the current time and setting it
let time = date.getUTCMilliseconds()
currentTime.innerHTML = time;