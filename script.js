const notesContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();

const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
};

const createNote = () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList = "input-box";
    inputBox.setAttribute("contenteditable","true")
    img.src = "images/delete.png";
    inputBox.append(img);
    notesContainer.appendChild(inputBox);
    // notesContainer.appendChild(inputBox).appendChild(img);
};

createBtn.addEventListener('click', createNote);

const removeNote = (e) => {
    if(e.target.nodeName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }else if (e.target.nodeName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
};

notesContainer.addEventListener('click', removeNote);

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})
