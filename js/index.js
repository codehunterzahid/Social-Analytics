// function myFunction() {
//     document.getElementById("hide").style.display = "none";
//     document.getElementById("hide1").style.display = "none";
    
//     document.getElementById("show").style.display = "block";
//     document.getElementById("hide1").innerHTML = "Show"
//   }
  
//   function myFunction1() {
//     document.getElementById("hide").style.display = "block";
//     document.getElementById("hide1").style.display = "block";
    
//     document.getElementById("show").style.display = "none";
//     document.getElementById("hide1").innerHTML = "Hide"
//   }

  // JavaScript code to add functionality to the page

  // Add an event listener to the button with id "hide1"
  document.getElementById("hide1").addEventListener("click", function() {
      // Toggle the display of the element with id "hide"
      var hideElement = document.getElementById("hide");
      if (hideElement.style.display === "none") {
          hideElement.style.display = "block";
          // Change the innerHTML of the button to "Hide"
          this.innerHTML = "Hide";
      } else {
          hideElement.style.display = "none";
          // Change the innerHTML of the button to "Show"
          this.innerHTML = "Show";
      }
  });
