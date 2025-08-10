let textarea = document.getElementById("textarea")
//let addButton = document.getElementById("add");
//addButton.classList.add("active"); // Add active class to the button
//let copyButton = document.getElementById("copy"); //
let pasteButton = document.getElementById("paste"); ////
let saveButton = document.getElementById("save"); 
let clearButton = document.getElementById("clear"); //
let results = document.getElementById("results"); //
let toggleThemeButton = document.getElementById("toggleTheme"); //
let body = document.body;

function save(){
    let text = textarea.value.trim(); // Get the trimmed value from textarea
    if (text && text.length > 0) {
        localStorage.setItem("note", text); // Save the note to localStorage
        alert("Note saved!");
    } else {
        alert("Please enter a note to save.");
    }

}

let textarea1 = document.getElementById("textarea1");
function openNote() {
    let savedNote = localStorage.getItem("note"); // Retrieve the note from localStorage
    if (savedNote) {
        textarea1.value = savedNote; // Set the textarea value to the saved note
        alert("Note opened from localStorage!");
    } else {
        alert("No note found in localStorage.");
    }
}


//textarea = textarea.value.trim(); // Initialize textarea variable
function copy(){
    let text = textarea.value.trim(); // Get the trimmed value from textarea
    if (text && text.length > 0) {
    navigator.clipboard.writeText(text);
    alert("Note copied to clipboard!")
    ;}
}

let list = document.getElementById("list");
function paste(){
    navigator.clipboard.readText().then(text => {
        if(text && text.length > 0) {
            let li = document.createElement("li")
            li.innerHTML = text; // Create a new list item with the pasted text
           // list.textContent = text; // Set the text content of the list item
            results.appendChild(li) // Display pasted text in results
            //list.appendChild(li); // Append the list item to the list
            //textarea = text; // Update textarea variable
            alert(`Note pasted from clipboard!`);
        }
    }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
}

function clear(){

    results.innerHTML = ""; // Clear the results display
    textarea.value = ""; // Clear the textarea variable
    alert("Note & Result cleared!");
}
clearButton.addEventListener("click", clear);


let savedTheme = localStorage.getItem("theme");
if(savedTheme == 'dark'){
    body.classList.add("dark-mode");
    toggleThemeButton.innerText = "Light mode";
}

toggleThemeButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleThemeButton.innerText = "🌞Light mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleThemeButton.innerText = "🌙Dark mode";
        localStorage.setItem("theme", "light");
    }
});