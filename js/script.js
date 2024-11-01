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
        // Software Licensing
        'Multi-Device Licensing': 'We provide licenses that cover multiple devices or users, simplifying management and ensuring comprehensive protection across all endpoints.',
        'Centralized License Management': 'We use centralized management tools to track and manage licenses easily, ensuring compliance and maximizing the use of purchased licenses.',
        'License Compliance Support': 'We provide guidance and support to help organizations stay compliant with licensing terms, reducing the risk of penalties and audits.',

        // Enterprise Security
        'Endpoint Security': 'Protects all endpoints in your organization (desktops, laptops, mobile devices) with Bitdefender’s robust endpoint security solutions, ensuring comprehensive coverage against malware and other cyber threats.',
        'Network Security': 'We implement Bitdefender network security solutions to monitor and defend against intrusions and malicious traffic across your network.',
        'Data Protection': 'We ensure sensitive data is safeguarded with encryption and secure data loss prevention features, protecting against data breaches and unauthorized access.',

        // Cybersecurity Solutions
        'Comprehensive Endpoint Protection': 'We utilize advanced endpoint protection to safeguard all devices against malware, ransomware, and other cyber threats with real-time scanning and protection.',
        'Advanced Threat Intelligence': 'We leverage our top products global threat intelligence network to stay informed about emerging threats and vulnerabilities, allowing proactive defense strategies.',
        'Security Awareness Training': 'We offer training programs for employees to enhance their understanding of cybersecurity best practices, reducing the risk of human error leading to security incidents.',
    
        // Web Development
        'E-commerce Solutions': 'We create robust e-commerce platforms that facilitate online transactions, provide secure payment options including Mpesa integration, and enhance the overall shopping experience.',
        'SEO Optimization': 'We integrate SEO best practices into web development to improve search engine rankings, driving organic traffic and increasing visibility.',
        'Content Management Systems': 'We develop user-friendly CMS solutions that empower clients to easily manage and update their website content without technical expertise.',
    
        // Digital Transformation
        'Process Automation': 'We help businesses identify and automate repetitive tasks to enhance productivity, reduce errors, and free up resources for more strategic initiatives.',
        'Cloud Solutions': 'We support businesses to migration to cloud-based solutions, enabling scalability, flexibility, and improved collaboration across teams and locations.',
        'Cybersecurity Integration': 'We ensure that cybersecurity measures are integrated into digital transformation efforts, protecting sensitive data and systems throughout the transition.',
      
        // Consulting Services
        'Technology Integration': 'We help organizations choose and implement technology solutions that enhance their operations, improve efficiency, and drive innovation.',
        'Regulatory Compliance': 'We Guide clients in navigating regulatory requirements relevant to their industry, ensuring compliance and reducing the risk of penalties.',
        'Market Research': 'Provides insights into market trends to inform your strategies.',
    };  

    const sub_service_card = document.querySelectorAll('.sub-service');
    sub_service_card.forEach(service => {
        service.addEventListener('click', function() {
            //get the service name
            const serviceName = service.querySelector('span').textContent;

            // Check if content is already expanded to prevent duplicates
            // if the content is not expanded, expand it
            if (!service.querySelector('.expanded-content')) {
                const expandedContent = document.createElement('div');
                // we could use the `expanded-content` to style that section
                expandedContent.classList.add('expanded-content');
                //Get the specific data and input it from the object we've declared up
                expandedContent.textContent = serviceDetails[serviceName] || 'No additional information available.';
                service.appendChild(expandedContent);
            } else {
                // Optionally, you could toggle the visibility
                const existingContent = service.querySelector('.expanded-content');
                existingContent.remove(); // Remove if clicked again to collapse
            }
        })
    });   
})

/*=============================================================================================
                            ANIMATE THE SECTIONS
==============================================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');

    window.onscroll = () => {
        let scrollY = window.scrollY; // Correctly get the scroll position

        sections.forEach(section => {
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;

            if (scrollY >= offset && scrollY < offset + height) {
                section.classList.add('show-animate');
            } else {
                section.classList.remove('show-animate');
            }
        });
    };
});