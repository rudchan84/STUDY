// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  onMouseOver: function onMouseOver() {
    target.innerText = "The mouse is here!";
    target.style.color = colors[0];
  },

  onMouseOut: function onMouseOut() {
    target.innerText = "The mouse is gone!";
    target.style.color = colors[1];
  },

  onResize: function onResize() {
    target.innerText = "You just resized!";
    target.style.color = colors[2];
  },

  onMouseRightClick: function onMouseRightClick() {
    target.innerText = "That was a right click!";
    target.style.color = colors[4];
  }
};
const target = document.querySelector("body h2");

target.addEventListener("mouseover", superEventHandler.onMouseOver);
target.addEventListener("mouseout", superEventHandler.onMouseOut);
window.addEventListener("resize", superEventHandler.onResize);
window.addEventListener("contextmenu", superEventHandler.onMouseRightClick);
console.log('hi')