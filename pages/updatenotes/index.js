const createNoteInput =document.querySelector(".create-note-input");
createNoteInput.addEventListener("input",(e)=> {
    console.log(e.target.value);
});
const  urlParams = new URLSearchParams( window.location.search);
const noteId=urlParams.get("id");
console.log(noteId);

// http://127.0.0.1:5500/pages/updatenotes/index.html?id=2