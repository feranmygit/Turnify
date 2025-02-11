document.addEventListener("DOMContentLoaded", () => {
    
    /* FOR HAMBURGER */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});



/* FOR ACTIVE LINKS */
const navItem = document.querySelectorAll(".nav-links ul li a");

navItem.forEach(link => {
    link.addEventListener("click", function () {
        // Remove active class from all links
        navItem.forEach(nav => nav.classList.remove("active"));

        // Add active class to the clicked link
        this.classList.add("active");
    });
});


/* GET WITH US PAGE */
const formContainer = document.getElementById("formContainer");
    
function checkScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const formPosition = formContainer.offsetTop;

    if (scrollPosition > formPosition + 100) {
        formContainer.classList.add("show");
    }
}

window.addEventListener("scroll", checkScroll);

});
