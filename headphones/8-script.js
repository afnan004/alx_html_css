document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            navList.classList.add('active');
            hamburgerMenu.classList.add('active');
        } else {
            navList.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});