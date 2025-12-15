// Preloader functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader after page loads
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1000);
    });

    // Initialize typewriter effect
    const typewriterElement = document.getElementById('typewriter');
    if(typewriterElement) {
        new Typewriter(typewriterElement, {
            strings: [
                'AI/ML Engineer',
                'Web Developer',
                'Innovation Specialist',
                'Community Problem Solver'
            ],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 50
        });
    }

    // Navbar functionality
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Scroll Reveal animations
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.hero-title, .hero-subtitle', {
            delay: 200,
            origin: 'left',
            distance: '30px',
            duration: 1000,
            easing: 'ease-out'
        });

        ScrollReveal().reveal('.hero-image', {
            delay: 400,
            origin: 'right',
            distance: '30px',
            duration: 1000,
            easing: 'ease-out'
        });

        ScrollReveal().reveal('.hero-stats .stat-item', {
            delay: 500,
            origin: 'bottom',
            distance: '30px',
            interval: 200,
            duration: 1000
        });

        ScrollReveal().reveal('.btn', {
            delay: 600,
            origin: 'bottom',
            distance: '30px',
            duration: 1000
        });

        ScrollReveal().reveal('.about-text, .about-stats', {
            delay: 200,
            origin: 'top',
            distance: '30px',
            duration: 1000
        });

        ScrollReveal().reveal('.timeline-item', {
            delay: 200,
            origin: 'bottom',
            distance: '30px',
            interval: 150,
            duration: 1000
        });

        ScrollReveal().reveal('.education-item', {
            delay: 200,
            origin: 'bottom',
            distance: '30px',
            interval: 150,
            duration: 1000
        });

        ScrollReveal().reveal('.skill-category', {
            delay: 200,
            origin: 'bottom',
            distance: '30px',
            interval: 200,
            duration: 1000
        });

        ScrollReveal().reveal('.project-card', {
            delay: 200,
            origin: 'bottom',
            distance: '30px',
            interval: 150,
            duration: 1000
        });

        ScrollReveal().reveal('.contact-info, .contact-form', {
            delay: 200,
            origin: 'top',
            distance: '30px',
            duration: 1000
        });
    }

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if(name && email && subject && message) {
                try {
                    const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name, email, subject, message })
                    });

                    const result = await response.json();

                    if (response.ok) {
                        alert(result.message);
                        contactForm.reset();
                    } else {
                        alert('Error: ' + result.message);
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                    alert('An error occurred while sending your message. Please try again.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(0)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize scroll animations for stats counters if they come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const animateStats = () => {
        if(statsAnimated) return;

        const statsSection = document.querySelector('.about-stats');
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if(isVisible) {
            statsAnimated = true;

            // Animate numbers (in a real scenario, you might want to count up from 0)
            statNumbers.forEach(num => {
                num.classList.add('pulse-animation');
            });
        }
    };

    window.addEventListener('scroll', animateStats);
    // Trigger once in case the stats are already visible
    animateStats();

    // Initialize skill progress bars when they come into view
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;

    const animateSkills = () => {
        if(skillsAnimated) return;

        const skillsSection = document.querySelector('.skills');
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if(isVisible) {
            skillsAnimated = true;

            // Animate skill bars (you can set specific percentages here)
            const skillValues = [95, 90, 85, 80, 95, 90, 85, 80, 100, 100, 100, 100];
            skillProgressElements.forEach((progress, index) => {
                const value = skillValues[index] || 80; // Default to 80% if not specified
                setTimeout(() => {
                    progress.style.width = value + '%';
                }, 300 * index); // Stagger the animations
            });
        }
    };

    window.addEventListener('scroll', animateSkills);
    // Trigger once in case the skills are already visible
    animateSkills();

    // Initialize experience timeline animations
    const timelineItems = document.querySelectorAll('.timeline-content');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    }, 200 * index); // Stagger animations
                }
            });
        }, { threshold: 0.1 });

        observer.observe(item);
    });

    // Add wave animation to the hand emoji in the hero section
    const waveElements = document.querySelectorAll('.wave-animation');
    waveElements.forEach(wave => {
        wave.addEventListener('mouseover', function() {
            this.style.animationPlayState = 'running';
        });
    });

    // Add parallax effect for the hero section
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            hero.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // Add scroll-to-top button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Enhanced particle effects
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        // Clear existing particles
        particlesContainer.innerHTML = '';

        // Create new particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('dynamic-particle');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: hsla(${Math.random() * 360}, 70%, 60%, ${Math.random() * 0.4 + 0.1});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 15 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress-bar');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const scrolled = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });

    // Add copy email functionality
    const emailElements = document.querySelectorAll('[data-copy="email"]');
    emailElements.forEach(emailEl => {
        emailEl.style.cursor = 'pointer';
        emailEl.addEventListener('click', () => {
            const email = emailEl.textContent;
            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailEl.textContent;
                emailEl.textContent = 'Copied!';
                setTimeout(() => {
                    emailEl.textContent = originalText;
                }, 2000);
            });
        });
    });

    // Add dark mode toggle functionality
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.classList.add('theme-toggle');
    themeToggle.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    `;

    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

        // Store user preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Utility function for smooth scrolling to any element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to highlight active section in navigation
function setActiveNavSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        const sectionTop = current.offsetTop;
        const sectionHeight = current.offsetHeight;

        if(scrollPos >= sectionTop && scrollPos < (sectionTop + sectionHeight)) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.remove('active');
        }
    });
}

// Enhanced mobile menu toggle
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Change hamburger icon
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
}

// Function to add dark mode styles (if needed)
function addDarkModeStyles() {
    const darkModeStyles = document.createElement('style');
    darkModeStyles.id = 'dark-mode-styles';
    darkModeStyles.textContent = `
        .dark-mode {
            background-color: #0f172a !important;
            color: #f1f5f9 !important;
        }

        .dark-mode .navbar {
            background-color: rgba(15, 23, 42, 0.95) !important;
            color: #f1f5f9 !important;
        }

        .dark-mode .hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
        }

        .dark-mode .about,
        .dark-mode .skills,
        .dark-mode .projects,
        .dark-mode .contact {
            background-color: #0f172a !important;
        }

        .dark-mode .section-title,
        .dark-mode .hero-subtitle,
        .dark-mode .about-text p,
        .dark-mode .skill-category,
        .dark-mode .project-card,
        .dark-mode .contact-info p {
            color: #f1f5f9 !important;
        }

        .dark-mode .project-card,
        .dark-mode .skill-category,
        .dark-mode .education-item,
        .dark-mode .timeline-content {
            background-color: #1e293b !important;
        }
    `;
    document.head.appendChild(darkModeStyles);
}

// Initialize dark mode styles on load
document.addEventListener('DOMContentLoaded', addDarkModeStyles);