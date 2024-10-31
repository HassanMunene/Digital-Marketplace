/*========================================================================
                    NAVIGATION BAR SECTION
========================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar');
    const menu_btn = document.getElementById('menu-btn');

    let search_form = document.querySelector('.search-form');
    const search_btn = document.getElementById('search-btn');

    let contact_info = document.querySelector('.contact-info');
    const info_btn = document.getElementById('info-btn');
    const close_contact_info = document.getElementById('close-contact-info');


    menu_btn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        search_form.classList.remove('active');
        contact_info.classList.remove('active');
    })

    search_btn.addEventListener('click', function() {
        search_form.classList.toggle('active');
        navbar.classList.remove('active');
        contact_info.classList.remove('active');
    })

    info_btn.addEventListener('click', function() {
        contact_info.classList.add('active');
        navbar.classList.remove('active');
        search_form.classList.remove('active');
    })

    close_contact_info.addEventListener('click', function() {
        contact_info.classList.remove('active');
        navbar.classList.remove('active');
        search_form.classList.remove('active');
    })
    window.onscroll = () => {
        navbar.classList.remove('active');
        search_form.classList.remove('active');
        contact_info.classList.remove('active');
    }

    var swiper = new Swiper(".home-slider", {
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
})