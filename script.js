document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');

    const options = {
        root: null, // viewport
        threshold: 0.1, // fade in when 10% of the section is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to fade in
                entry.target.classList.add('is-visible');
            } else {
                // Remove class to fade out when scrolling away
                entry.target.classList.remove('is-visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});