// Get the navbar element
const nav = document.getElementById('nav');
var crsr = document.querySelector("#cursor");


// Function to handle scroll event
window.addEventListener('scroll', () => {
    // Check if the page has been scrolled down
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener("mousemove",function(dets) {
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
   
});