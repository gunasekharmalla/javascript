
const list = document.getElementById("classList");

function copy()
{ 
    let input = document.getElementById("inputText");
    let val = input.value.trim(); 

    if (val == ""){
        return alert("Please enter a message to copy");
    }

    if (val && val !== "")
    {
        navigator.clipboard.writeText(val).then(()=>{
            alert(`message copied ${val}`)
            const li = document.createElement("li");
            li.innerHTML = `${val} <button onclick="copyAgain('${val}')">copy again</button> <button onclick="Delete('${val}')">Delete</button>`;
            list.appendChild(li);
            input.val = ""
            val.value = "";
        }).catch(err=>{alert(`failed to copy`)})
    }

}

function copyAgain(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`message copied again: ${text}`);
    })
}

function Delete(val)
{
    const items = document.querySelectorAll("li");
    items.forEach(item => {
        if (item.textContent.includes(val)) {
            item.remove();
        }
    });
    alert(`Deleted message: ${val}`);
}