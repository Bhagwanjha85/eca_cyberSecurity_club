

// Frequently ask question js 


// var p1 = document.querySelector("#p1")
// var q1 = document.querySelector("#q1")
// var p2 = document.querySelector("#p2")
// var q2 = document.querySelector("#q2")
// var p3 = document.querySelector("#p3")
// var q3 = document.querySelector("#q3")
// var p4 = document.querySelector("#p4")
// var q4 = document.querySelector("#q4")


document.addEventListener("DOMContentLoaded", function() {
    const qsData = [{
                qes1 : "adipisicing elit. Incidunt voluptatum at tenetur. Cum dolores similique",
                qes2 : "adipisicing elit. Incidunt voluptatum at tenetur. Cum dolores similique adipisicing elit. Incidunt voluptatum at tenetur. Cum dolores similique",
                qes3 : "adipisicing elit. Incidunt voluptatum at tenetur. Cum dolores similique",
                qes4 : "adipisicing elit. Incidunt voluptatum at tenetur. Cum dolores similique"
            }];
        
    // Add click event listeners to each paragraph
    document.querySelectorAll("p").forEach(function(paragraph) {
        paragraph.addEventListener("click", function() {
            // Get the id of the target span from data-target attribute
            const targetId = paragraph.getAttribute("data-target");
            // Get the corresponding span element
            const targetSpan = document.getElementById(targetId);
            // Update the inner HTML of the span with different data
            if (targetSpan.innerHTML !== "") {
                targetSpan.innerHTML = ""; // If yes, clear the inner HTML
            } else {
            if (targetId === "q1") {
                targetSpan.innerHTML = qsData[0].qes1;
            } else if (targetId === "q2") {
                targetSpan.innerHTML = qsData[0].qes2;
            } else if (targetId === "q3") {
                targetSpan.innerHTML = qsData[0].qes3;
            } else if (targetId === "q4") {
                targetSpan.innerHTML =qsData[0].qes4;
            }
        }
        });
    });
  });
  
    
    
   
  
  
  
  
  
  