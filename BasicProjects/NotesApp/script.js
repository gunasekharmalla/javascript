const addnotebtn = document.getElementById("addnotebtn");
const notescontainer = document.getElementById("notescontainer");

function addnote(text = "")
{
const note = document.createElement("div");
note.classList.add("note");
note.innerHTML = `<textarea>${text}</textarea>
                 <button class="deletebtn">X</button>`;
}

addnotebtn.addEventListener("click", () => addnote());