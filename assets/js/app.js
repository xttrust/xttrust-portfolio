// Show/hide button on scroll
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top when button is clicked
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


// Add animation to page
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
       if (entry.isIntersecting) {
           entry.target.classList.add('show');
           observer.unobserve(entry.target); // Optional: Stop observing after showing
       } else {
           entry.target.classList.remove('show');
       }
   });
});

// Select elements to observe
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
