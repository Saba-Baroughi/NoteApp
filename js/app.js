let $ = document;
const inputElem = $.querySelector("#input-field");

const btnSaveElem = $.querySelector("#btn-save");
const btnDeleteElem = $.querySelector("#btn-delete");
const colorsBox = $.querySelectorAll(".color-box");
const notesContainer = $.querySelector("#listed");
console.log(colorsBox);
colorsBox.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    console.log(event.target);
    let mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
  });
});
function generateNewNote() {
  if (inputElem.value) {
    let newNoteDivElem = document.createElement("div");

    newNoteDivElem.className = "card shadow-sm rounded";
    let inputBg = inputElem.style.backgroundColor;
    newNoteDivElem.style.backgroundColor = inputBg;
    newNoteDivElem.addEventListener("click", removeNote);

    let newNotePElem = $.createElement("p");
    newNotePElem.className = "card-text p-3";
    newNotePElem.innerHTML = inputElem.value;

    newNoteDivElem.append(newNotePElem);
    console.log(newNoteDivElem);
    notesContainer.append(newNoteDivElem);
    inputElem.value = "";
    inputElem.style.backgroundColor = "#fff";
  }
  btnDeleteElem.addEventListener("click", function () {
    inputElem.value = "";
    inputElem.style.backgroundColor = "#fff";
  });
  function removeNote(event) {
    event.target.parentElement.remove();
  }
}

inputElem.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    generateNewNote();
  }
});
btnSaveElem.addEventListener("click", generateNewNote);
