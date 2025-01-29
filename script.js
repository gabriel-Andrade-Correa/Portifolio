// Animações com Framer Motion
document.addEventListener('DOMContentLoaded', () => {
    // Animação inicial do logo
    const logo = document.querySelector('.logo');
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        logo.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
    }, 300);

    // Animação dos links do menu
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });

    // Animação sofisticada da foto de perfil
    const profileImage = document.querySelector('.profile-image');
    profileImage.style.opacity = '0';
    profileImage.style.transform = 'scale(0.8) rotate(-10deg)';
    setTimeout(() => {
        profileImage.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        profileImage.style.opacity = '1';
        profileImage.style.transform = 'scale(1) rotate(0deg)';
    }, 800);

    // Animação do texto do hero
    const heroContent = document.querySelector('.hero-content');
    const heroTexts = heroContent.querySelectorAll('h1, p');
    heroTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(30px)';
        setTimeout(() => {
            text.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 1200 + (index * 200));
    });

    // Animação das skills com efeito cascata
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0) rotate(-45deg)';
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            tag.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                            tag.style.opacity = '1';
                            tag.style.transform = 'scale(1) rotate(0deg)';
                        }, index * 100);
                        observer.unobserve(tag);
                    }
                });
            },
            { threshold: 0.1 }
        );
        observer.observe(tag);
    });

    // Animação sofisticada dos cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = `perspective(1000px) 
                               translateX(${index % 2 === 0 ? '-100%' : '100%'}) 
                               rotateY(${index % 2 === 0 ? '-45deg' : '45deg'}) 
                               scale(0.8)`;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            card.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
                            card.style.opacity = '1';
                            card.style.transform = 'perspective(1000px) translateX(0) rotateY(0) scale(1)';
                            
                            // Efeito de brilho
                            card.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)';
                            setTimeout(() => {
                                card.style.boxShadow = '0 5px 15px rgba(212, 175, 55, 0.1)';
                            }, 1200);
                        }, index * 200);
                        
                        // Anima os elementos internos do card com efeito cascata
                        const cardElements = card.querySelectorAll('.project-image, h3, p, .btn');
                        cardElements.forEach((element, elemIndex) => {
                            element.style.opacity = '0';
                            element.style.transform = 'translateY(30px) scale(0.9)';
                            setTimeout(() => {
                                element.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                                element.style.opacity = '1';
                                element.style.transform = 'translateY(0) scale(1)';
                            }, (index * 200) + (elemIndex * 150) + 500);
                        });
                        
                        observer.unobserve(card);
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(card);
    });

    // Animação dos ícones de contato
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'scale(0) rotate(180deg)';
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            link.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                            link.style.opacity = '1';
                            link.style.transform = 'scale(1) rotate(0deg)';
                        }, index * 200);
                        observer.unobserve(link);
                    }
                });
            },
            { threshold: 0.1 }
        );
        observer.observe(link);
    });
});

// Efeito parallax suave no scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const speed = section.dataset.speed || 0.3;
        section.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Navbar com efeito de blur ao scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(0px)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active section highlight in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 