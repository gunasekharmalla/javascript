let toggleTheme = document.getElementById("toggleTheme");
let body = document.body;

let savedTheme = localStorage.getItem("theme");
if (savedTheme == 'dark'){
    body.classList.add("dark-mode");
    toggleTheme.innerText = "Light mode";
}

toggleTheme.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleTheme.innerText = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleTheme.innerText = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});