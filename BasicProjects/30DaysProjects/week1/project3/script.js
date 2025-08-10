let themetogglebutton = document.getElementById("themetoggle");
let body = document.body;

let savedTheme = localStorage.getItem("theme")
if (savedTheme == 'dark')
{
    body.classList.add("dark-mode");
    themetogglebutton.innerText = "Light mode";
}else {
    themetogglebutton.innerText = "Dark mode";
}

themetogglebutton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themetogglebutton.innerText = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themetogglebutton.innerText = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

let textarea = document.getElementById("text");
function add(){
    let textvalue = textarea.value.trim(); // This makes textarea a string, not an element!
    if (textvalue === "" || textvalue === null || textvalue.length === 0) {
        alert("Please enter a note");
        return;
    }
let list = document.getElementById("list"); 
let li = document.createElement("li"); 
li.innerHTML = `${textvalue} <button class="Delete" onclick="Delete('${textvalue}')">Delete</button> <button>Mark as Done</button>`;
list.appendChild(li);
updateCounter(); // Update the counter after adding a new note
textarea.value = ""; // Clear the textarea after adding the note
}

let counter = document.getElementById("count");
function updateCounter() {
    let list = document.getElementById("list");
    let items = list.getElementsByTagName("li");
    counter.textContent = `Total Notes: ${items.length}`;
}


function Delete(textvalue) {
    let list = document.getElementById("list");
    let items = list.getElementsByTagName("li");
   /*
         for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(textvalue)) {
            list.removeChild(items[i]);
            break;
        }
    }
        */

    Array.from(items).forEach((item)=>{
        if (item.textContent.includes(textvalue)) {
            list.removeChild(item);
        }
    })
    updateCounter();
}

let cls = document.getElementById("cls");
cls.addEventListener("click", clear);
function clear(){
    let results = document.getElementById("list");
    results.innerHTML = ""; // Remove all child elements (li) from results
    textarea.value = "";    // Clear the textarea input
    updateCounter(); // Update the counter after clearing
    alert("Note & Result cleared!");
}