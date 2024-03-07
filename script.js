const notesContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

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
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
};

notesContainer.addEventListener('click', removeNote);