let arr = ["The best way to get started is to quit talking and begin doing. — Walt Disney",

            "Don't let yesterday take up too much of today. — Will Rogers",

            "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",

            "If you are working on something exciting, it will keep you motivated. — Steve Jobs",

            "Success is not in what you have, but who you are. — Bo Bennett",

            "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",

            "Dream bigger. Do bigger. — Unknown",

            "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",

            "Great things never come from comfort zones. — Unknown",

            "Push yourself, because no one else is going to do it for you. — Unknown"]

    let list = document.getElementById("list")

function quote(){
    //console.log(arr[rand])
    let rand = Math.floor(Math.random() * arr.length) 
    let li = document.createElement("li")
    li.innerHTML = ` <h2> ${arr[rand]} </h2>`
    list.appendChild(li)
}

const clearButton = document.getElementById("cls")
clearButton.addEventListener("click", clear)
function clear(){
    list.innerHTML = ""; // Remove all child elements (li) from list
    alert("Quotes cleared!");
}

let themeTogglebutton = document.getElementById("themeToggle"); 

let savedTheme = localStorage.getItem("theme"); 
if(savedTheme == 'dark'){
    document.body.classList.add("dark-mode");
    themeTogglebutton.innerHTML = "Light Mode";
}

themeTogglebutton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        themeTogglebutton.innerHTML = "🌞Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeTogglebutton.innerHTML = "🌙Dark Mode";
        localStorage.setItem("theme", "light");
    }
});