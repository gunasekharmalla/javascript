let colorDiv = document.getElementById("colorDiv");
let li = document.createElement("ol");
let resetButton = document.createElement("button");
let currenthexcolor = ""
function colorGenerator(){
    let randomcolor = '#' + Math.floor(Math.random()*16777215).toString(16);
    currenthexcolor = randomcolor;
    colorDiv.style.backgroundColor = randomcolor; 
    li.innerText = randomcolor;
    colorDiv.appendChild(li);

}

/* 
function copy(){
    let color = document.getElementById("colorDiv").style.backgroundColor
const sam = colorDiv.style.backgroundColor;
if (color){
    navigator.clipboard.writeText(color).then(()=>{alert(`color ${color} copied to clipboard`)}).catch((err)=>{console.log('Failed to copy: ', err);});
}
}
*/
function copy() {
    let color = colorDiv.style.backgroundColor;
    if (currenthexcolor && currenthexcolor!== "") {
        navigator.clipboard.writeText(currenthexcolor)
            .then(() => { alert(`color ${currenthexcolor} copied to clipboard`) })
            .catch((err) => { console.log('Failed to copy: ', err); });
    } else {
        alert("No color to copy!");

    }
}

let list = document.createElement("li")
let span = document.getElementById("spanlist")
function paste(){
    navigator.clipboard.readText().then((val) => {
    if (val && val !== ""){
        list.textContent = val 
        span.appendChild(list)
        alert(`Pasted color: ${val}`);
       }}).catch((err) => {
        alert('Failed to paste: ', err);})
}


  function vibrateDevice() {
    if (navigator.vibrate) {
      navigator.vibrate([2000, 1000, 2000]); // vibrate-pause-vibrate
    } else {
      alert("Vibration not supported on this device.");
    }
  }



function reset(){
    colorDiv.style.backgroundColor = "white";
    li.innerText = "";
    colorDiv.removeChild(li);
    //colorDiv.appendChild(li);
    li.innerText = "Color reset to white";
    list.textContent = "";
    currenthexcolor = "";
    span.appendChild(li);
    span.removeChild(list);
    alert("Color reset to white and list cleared");
} 