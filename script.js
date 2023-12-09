function toggleElement() {
    var paragraph = document.getElementById("toggleParagraph");

  //Check the current state of the paragraph
if(paragraph.sytle.dispaly == "none" || paragraph.style.display==="") {           
    
       if (paragraph.style.display === "")
       
        // if it is hidden, show it
        paragraph.style.display = "block";
        button.classList.add("active");
        button.classList.remove("inactive");
   } esle {
        //if it is visible then hide it
        paragraph.style.display = "none";
        button.classList.remove("active");
        button.classList.add("inactive");
    }
}