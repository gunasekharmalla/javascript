function date(){
let now = new Date()
let hours = String(now.getHours()).padEnd(2, '0');  
let tag = hours > 12 ? 'PM' : 'AM'  
hours = hours % 12
let minutes = String(now.getMinutes()).padEnd(2, '0')
let seconds = String(now.getSeconds()).padEnd(2, '0') 
let currentTime = `${hours}:${minutes}:${seconds} ${tag}` 
document.getElementById('time').innerHTML = currentTime

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

  const day = dayNames[now.getDay()];
  const date = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  const fullDate = `${day}, ${date} ${month} ${year}`;
  document.getElementById("date").textContent = fullDate;
} 
setInterval(date, 1000);
date(); // Initial call to set the time immediately
