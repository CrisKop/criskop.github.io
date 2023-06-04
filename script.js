const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observer(el));

window.onload = function() {
    document.getElementById('bio').classList.add('show')
    setTimeout(() => {
        document.getElementById('yt').classList.add('show')
    }, 200)
    setTimeout(() => {
        document.getElementById('dc').classList.add('show')
    }, 300)
    setTimeout(() => {
        document.getElementById('ig').classList.add('show')
    }, 400)
    setTimeout(() => {
        document.getElementById('tw').classList.add('show')
    }, 500)
    setTimeout(() => {
        document.getElementById('f0').classList.add('show')
    }, 600)
    setTimeout(() => {
        document.getElementById('f1').classList.add('show')
    }, 700)
    setTimeout(() => {
        document.getElementById('f2').classList.add('show')
    }, 800)
    setTimeout(() => {
        document.getElementById('f3').classList.add('show')
    }, 900)
};


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