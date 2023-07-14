

async function copydc(){
   // Copy the text inside the text field
   navigator.clipboard.writeText("CrisElKopo#6731");
   var tooltip = document.getElementById("myTooltip");
   tooltip.innerHTML = "Copied: " + "CrisElKopo#6731";
 }
 
 function outFunc() {
   var tooltip = document.getElementById("myTooltip");
   tooltip.innerHTML = "Copy to clipboard";
 }