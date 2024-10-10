/*

- The user should be able to set a color for boxes (this affects both current boxes and new boxes).
- The user should be able to add boxes with the set color to the div with the ID `box-container`:
    - When the button with the ID `new-box-button` is clicked.
    - When the `N` key is pressed.
- The user should be able to remove a box when the box is double-clicked on.
- Each box should display its ID.
- Each box should display its page coordinates when hovered (when the mouse leaves, it displays its ID back).
- Each box should have a class `box` for styling and selecting.

We coded the `index.html` and `style.css` files in the starter code for you. Before you start coding the `script.js` file, please review the `index.html` file.
*/

//Step 1: loading the script once the DOM is loaded

document.addEventListener("DOMContentLoaded", function () {
     //Step 2: get the elements from the DOM we need to work on.
     let boxContainer = document.getElementById("box-container");
     let colorForm = document.getElementById("color-form");
     let colorInput = document.getElementById("color-input");
     let btn = document.querySelector("#new-box-button");

     //Step 3: Create variables to store the box color and counter for the box ID

     let boxColor = null; // updatable box color
     let boxCounter = 0; //lables the boxes as they are made

     //Step 4:

     colorForm.addEventListener("submit", function (e) {
          e.preventDefault();
          boxColor = colorInput.value; // select the color we want
          let boxes = document.querySelectorAll(".box");
          for (let box of boxes) {
               box.style.backgroundColor = boxColor;
          } // loops over all boxes to change their colors
     });

     //Step 5:

     function addBox() {
          boxCounter += 1;
          const newBox = document.createElement("div");
          newBox.className = "box"; // set the box's class to "box"
          newBox.setAttribute("data-box-id", boxCounter.toString());
          newBox.innerText = boxCounter; //set the box's number
          newBox.style.backgroundColor = boxColor; //changes the color of the box based on what we have selected previously
          boxContainer.appendChild(newBox); //appends the new box to the boxContainer <div>
     }

     //Step 6:
     btn.addEventListener("click", addBox);

     //Step 7:
     document.addEventListener("dblclick", function (e) {
          if (e.target.className === "box") {
               e.target.remove();
          }
     });

     //Step 8:
     document.addEventListener("mouseover", function (e) {
          if (e.target.className === "box") {
               e.target.textContent = `X: ${e.pageX}, Y: ${e.pageY}`;
          }
     });

     //Step 9:

     document.addEventListener("mouseout", function (e) {
          if (e.target.className === "box") {
               let boxId = e.target.getAttribute("data-box-id");
               e.target.textContent = boxId;
          }
     });

     //Step 10:
     document.addEventListener("keypress", function (e) {
          if (e.target.id === "color-input") {
               return;
          }
          if (e.key === "n" || e.key === "N") {
               addBox();
          }
     });
});
