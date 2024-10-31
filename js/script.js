/*========================================================================
                    NAVIGATION BAR SECTION
========================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar');
    const menu_btn = document.getElementById('menu-btn');

    menu_btn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    })

    window.onscroll = () => {
        navbar.classList.remove('active');
    }
})