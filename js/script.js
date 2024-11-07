/*=============================================================================================
                    NAVIGATION BAR SECTION
==============================================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    // Open and close the mobile menu when the buttons are clicked
    const mobile_menu_links = document.querySelectorAll('.mobile-menu-link');
    document.getElementById('open-menu-btn').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.add('active');
    });

    document.getElementById('close-menu-btn').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.remove('active');
    });
    mobile_menu_links.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.mobile-menu').classList.remove('active');
        })
    })
})


/*=============================================================================================
                    SCROLL EVENTS FOR THE WEBSITE
==============================================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    // When we scroll, the header background change to white from transparent
    const desktopLinks = document.querySelectorAll('.desktop-link');
    const openMenuBtnSvg = document.querySelector('.open-menu-btn svg');
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        // Check if the page has been scrolled down by 100px or more
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            desktopLinks.forEach(link => {
                link.classList.add('scrolled');
            })
            openMenuBtnSvg.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            desktopLinks.forEach(link => {
                link.classList.remove('scrolled');
            })
            openMenuBtnSvg.classList.remove('scrolled');
        }
    });

    // When we refresh the browser scroll back to top
    window.onload = function() {
        if (window.location.hash) {
            // Clear the fragment identifier and scroll to the top
            history.replaceState(null, null, ' ');
            window.scrollTo(0, 0);
        }
    };
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


/*=============================================================================================
                            REVIEWS SECTION
==============================================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const nextReviewBtn = document.querySelector('.right-arrow');
    const prevReviewBtn = document.querySelector('.left-arrow');
    const smallScreenNextBtn = document.querySelector('.right-arrow-btn');
    const smallScreenPrevBtn = document.querySelector('.left-arrow-btn');

    const reviews = [
        {
            text: "Working with Benolives has truly transformed our approach to cybersecurity. Their expertise is unmatched, and the personalized support they provide makes all the difference. They took the time to understand our unique challenges and offered tailored solutions that fit our needs perfectly. We now feel more secure and confident in our digital operations, knowing we have a reliable partner by our side.",
            name: "Mwangi Kamau",
            stars: "★★★★★",
            image: "./assets/review_img1.jpg"
        },
        {
            text: "The customized website Benolives developed for us has significantly boosted our online presence. Their team worked closely with us throughout the process, ensuring every detail reflected our brand identity. The result was a stunning, user-friendly website that has attracted more visitors and increased engagement. I highly recommend their services to anyone looking to enhance their online visibility!",
            name: "Aisha Wambui",
            stars: "★★★★☆",
            image: "./assets/review_img2.jpeg"
        },
        {
            text: "We feel safer with Benolives protecting our business. Their software solutions are top-notch, providing us with robust security against evolving cyber threats. The ongoing support and regular updates ensure that we are always ahead of potential risks. Knowing we have such a competent team behind us gives us peace of mind to focus on our core operations.",
            name: "Juma Abdi",
            stars: "★★★★★",
            image: "./assets/review_img3.jpeg"
        },
        {
            text: "Professional and dedicated, the team at Benolives guided us through our digital transformation seamlessly. From initial consultation to implementation, their process was clear and collaborative. They equipped us with the necessary tools to navigate the digital landscape confidently, and we’ve seen remarkable improvements in our operational efficiency since working with them.",
            name: "Fatima Njeri",
            stars: "★★★★☆",
            image: "./assets/review_img4.jpeg"
        },
        {
            text: "Fantastic support! The team at Benolives really knows how to meet their clients' needs. They are responsive, knowledgeable, and genuinely care about our success. Whenever we have questions or require assistance, they are just a call away, ready to help. This level of customer service is rare and highly appreciated.",
            name: "Liam Otieno",
            stars: "★★★★★",
            image: "./assets/review_img5.jpeg"
        }
    ];
    
    let currentReviewIndex = 0;

    function updateReview() {
        const reviewText = document.querySelector('.review-text');
        const clientImage = document.querySelector('.client-info-image');
        const clientName = document.querySelector('.client-name');
        const clientStars = document.querySelector('.stars');
        const clientImages = document.querySelectorAll('.client-image');
    
        reviewText.textContent = reviews[currentReviewIndex].text;
        clientImage.src = reviews[currentReviewIndex].image;
        clientName.textContent = reviews[currentReviewIndex].name;
        clientStars.textContent = reviews[currentReviewIndex].stars;
    
        clientImages.forEach((img, index) => {
            img.classList.remove('active');
            if (index === currentReviewIndex) {
                img.classList.add('active');
            }
        });
    }   
    
    function nextReview() {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        updateReview();
    }

    function prevReview() {
        currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
        updateReview();
    }
    // Initial load
    updateReview();

    nextReviewBtn.addEventListener('click', function() {
        nextReview();
    })

    prevReviewBtn.addEventListener('click', function() {
        prevReview();
    })

    smallScreenNextBtn.addEventListener('click', function() {
        nextReview();
    })

    smallScreenPrevBtn.addEventListener('click', function() {
        prevReview();
    })
})
