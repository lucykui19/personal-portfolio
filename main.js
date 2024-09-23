// nav bar js code
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const mobileLinks = document.querySelector(".mobile-links");

    navToggle.addEventListener("click", function () {
        mobileLinks.classList.toggle("hidden");
        
    });
    
    mobileLinks.addEventListener("click", function () {
        mobileLinks.classList.toggle("hidden");
    });
});

// color change on click
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});


// navigation smooth  scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetedSection = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('nav').offsetHeight;
        let extraPadding = 0;

        if (window.innerWidth >= 768) {
            extraPadding = 50;
        }

        window.scrollTo({
            top: targetedSection.offsetTop - navHeight - extraPadding,
            behavior: 'smooth'

        });
        
        // root path
        if (window.location.hash) {
         
            window.history.replaceState(null, null, window.location.pathname);
        }

    })
})

