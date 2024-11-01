/*=============================================================================================
                    NAVIGATION BAR SECTION
==============================================================================================*/
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


/*=============================================================================================
                    ABOUT US SECTION
==============================================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const aboutUsSection = document.getElementById('about-us');
    const image = document.getElementById('about_image');
    const text = document.getElementById('about_text');

    window.addEventListener('scroll', () => {
        const sectionPosition = aboutUsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            image.classList.add('show');
            text.classList.add('show');
        }
    });
})


/*=============================================================================================
                            SERVICES SECTION JS
==============================================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const serviceDetails = {
        // Cybersecurity Solutions
        'Threat Detection': 'Identifies and alerts you to potential security threats in real time.',
        'Incident Response': 'Provides a comprehensive response plan to minimize damage from breaches.',
        'Security Audits': 'Assesses defenses and identifies vulnerabilities in your systems.',
    
        // Web Development
        'E-commerce Solutions': 'Custom solutions to enhance your online sales and customer experience.',
        'Responsive Design': 'Ensures your website works seamlessly across all devices.',
        'Content Management Systems': 'Empowers you to manage your website content effortlessly.',
    
        // Digital Transformation
        'Consulting': 'Strategic advice to navigate complex digital challenges and drive innovation.',
        'Risk Management': 'Identifies and mitigates risks in your digital transformation journey.',
        'Process Improvement': 'Streamlines operations for enhanced efficiency and effectiveness.',
    
        // Software Licensing
        'License Management': 'Helps you manage software licenses efficiently to stay compliant.',
        'Software Procurement': 'Guides you through the best software purchasing decisions.',
        'Vendor Management': 'Manages relationships with software vendors to maximize value.',
    
        // Consulting Services
        'Business Analysis': 'Comprehensive analysis to understand your business needs and goals.',
        'Strategic Planning': 'Helps in developing actionable plans for business growth.',
        'Market Research': 'Provides insights into market trends to inform your strategies.',
    
        // Enterprise Security
        'Threat Intelligence': 'Delivers insights into potential threats to your enterprise.',
        'Compliance Solutions': 'Ensures your organization meets industry regulations and standards.',
        'Security Training': 'Educates employees on best practices for maintaining security.'
    };    
    const sub_service_card = document.querySelectorAll('.sub-service');
    sub_service_card.forEach(service => {
        service.addEventListener('click', function() {
            // Check if content is already expanded to prevent duplicates
            if (!service.querySelector('.expanded-content')) {
                const expandedContent = document.createElement('div');
                expandedContent.classList.add('expanded-content'); // Add a class for styling
                expandedContent.textContent = 'More details about ' + service.querySelector('span').textContent;
                service.appendChild(expandedContent);
            } else {
                // Optionally, you could toggle the visibility
                const existingContent = service.querySelector('.expanded-content');
                existingContent.remove(); // Remove if clicked again to collapse
            }
        })
    });   
})