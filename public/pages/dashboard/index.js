const cardContainer= document.querySelector('.card-container');

const cardData = [
  { heading: "heading1", content: "lorem", id: 1 },
  { heading: "heading1", content: "sdsdjsflflfhf", id: 2 },
  { heading: "heading1", content: "sdsdjsflflfhf", id: 3 },
  { heading: "heading1", content: "sdsdjsflflfhf", id: 4 },
  { heading: "heading1", content: "sdsdjsflflfhf", id: 5 },
];

const createNotes = (array) => {
  array.forEach((cardobj) => {
    const { heading, content, id } = cardobj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;
    const insideHtml = `<div class="card-header">
 <div class="card-heading">${heading}</div>
 <div class="edit-note">
   <img src="../../../assests/edit-note.svg" alt="" />
 </div>
</div>
<div class="card-content">${content}
 </div>`;
    card.innerHTML = insideHtml;
    cardContainer.appendChild(card);
  });
};
createNotes(cardData);

const body = document.querySelector("body");
const signInSignUpButton=document.querySelector(".sign-in-sign-up");
window.addEventListener("load", () => {
  body.classList.add("visible");
});