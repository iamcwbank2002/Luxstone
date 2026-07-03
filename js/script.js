/* ==================== Toggle Icon Navbar ==================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

/* ==================== Scroll Sections Active Link ==================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    if (navbar && navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

/* ==================== Typed Text ==================== */
if (document.querySelector('.typed-text') && typeof Typed !== 'undefined') {
    new Typed('.typed-text', {
        strings: ['Sandwash', 'Terrazzo'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
    });
}

/* ==================== Portfolio Lightbox ==================== */
const portfolioOverlay = document.querySelector('.portfolio-overlay');
const overlayImage = document.querySelector('.portfolio-overlay img');
const overlayCaption = document.querySelector('.portfolio-overlay-caption');
const overlayClose = document.querySelector('.portfolio-overlay-close');

if (portfolioOverlay && overlayImage && overlayCaption && overlayClose) {
    document.querySelectorAll('.project-card img').forEach((image) => {
        image.addEventListener('click', () => {
            overlayImage.src = image.src;
            overlayImage.alt = image.alt || 'Portfolio image';
            overlayCaption.textContent = image.alt || '';
            portfolioOverlay.classList.add('active');
            portfolioOverlay.setAttribute('aria-hidden', 'false');
        });
    });

    const closeOverlay = () => {
        portfolioOverlay.classList.remove('active');
        portfolioOverlay.setAttribute('aria-hidden', 'true');
    };

    overlayClose.addEventListener('click', closeOverlay);
    portfolioOverlay.addEventListener('click', (event) => {
        if (event.target === portfolioOverlay) {
            closeOverlay();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeOverlay();
        }
    });
}


