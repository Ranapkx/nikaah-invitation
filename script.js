/**
 * Nikah Wedding Invitation - JavaScript
 * Elegant Minimal Design with Animations
 */

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    initEnvelopeAnimation();
    initNavigation();
    initSmoothScroll();
});

// ========================================
// Envelope Opening Animation
// ========================================
function initEnvelopeAnimation() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelope = document.getElementById('envelope');
    const invitationContent = document.getElementById('invitationContent');

    if (!envelope) return;

    let isOpening = false;

    // Scroll/wheel to open envelope
    function handleScroll(e) {
        if (isOpening) return;
        e.preventDefault();
        openEnvelope();
    }

    // Listen for wheel event (desktop scroll)
    envelopeWrapper.addEventListener('wheel', handleScroll, { passive: false });

    // Listen for touch swipe (mobile)
    let touchStartY = 0;
    envelopeWrapper.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    envelopeWrapper.addEventListener('touchmove', function(e) {
        if (isOpening) return;
        const touchEndY = e.touches[0].clientY;
        const diff = touchStartY - touchEndY;

        // If swiped up more than 30px, open envelope
        if (diff > 30) {
            e.preventDefault();
            openEnvelope();
        }
    }, { passive: false });

    // Also allow click/tap as fallback
    envelope.addEventListener('click', openEnvelope);

    function openEnvelope() {
        if (envelope.classList.contains('open') || isOpening) return;
        isOpening = true;

        // Add open class to envelope
        envelope.classList.add('open');

        // Create seal break sound effect (visual feedback)
        createSealBreakEffect();

        // Try to play background music
        tryPlayMusic();

        // After card rises, fade out envelope and show content
        setTimeout(() => {
            envelopeWrapper.classList.add('hidden');
            invitationContent.classList.add('visible');

            // Initialize main content after envelope is hidden
            setTimeout(() => {
                initMainContent();
            }, 500);
        }, 2500);
    }
}

// Create visual effect when seal breaks
function createSealBreakEffect() {
    const seal = document.getElementById('waxSeal');
    if (!seal) return;

    // Create sparkle burst at seal position
    const rect = seal.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create multiple particles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const angle = (i / 12) * Math.PI * 2;
        const velocity = Math.random() * 80 + 40;
        const size = Math.random() * 6 + 3;

        particle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            width: ${size}px;
            height: ${size}px;
            background: ${i % 2 === 0 ? '#D4AF37' : '#8B0000'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: sealParticle 0.8s ease-out forwards;
            --tx: ${Math.cos(angle) * velocity}px;
            --ty: ${Math.sin(angle) * velocity}px;
        `;

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }

    // Add the animation style if not exists
    if (!document.getElementById('sealParticleStyle')) {
        const style = document.createElement('style');
        style.id = 'sealParticleStyle';
        style.textContent = `
            @keyframes sealParticle {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Try to play music on envelope open
function tryPlayMusic() {
    const audio = document.getElementById('bgMusic');
    const toggle = document.getElementById('musicToggle');

    if (audio && toggle) {
        audio.play().then(() => {
            toggle.classList.add('playing');
        }).catch(() => {
            // Audio play failed (likely due to autoplay restrictions)
            console.log('Audio autoplay blocked');
        });
    }
}

// ========================================
// Navigation
// ========================================
function initNavigation() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (!nav) return;

    // Scroll effect for navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Initialize Main Content
// ========================================
function initMainContent() {
    // Initialize AOS with enhanced settings
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            disable: 'mobile',
            anchorPlacement: 'top-bottom'
        });
    }

    // Initialize core features
    initCountdown();
    initRSVPForm();
    initMusicToggle();
    initWhatsAppShare();
    initParallax();

    // Initialize advanced animations
    initScrollAnimations();
    initFloatingHearts();
    initSparkleEffect();
    initTiltEffect();
    initMagneticHover();
    initImageReveal();
}

// ========================================
// Countdown Timer
// ========================================
function initCountdown() {
    // Set your wedding date (Year, Month-1, Day, Hour, Minute)
    const weddingDate = new Date(2026, 0, 31, 14, 0, 0); // January 31, 2026, 2:00 PM

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl) return;

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Animate number changes
        animateValue(daysEl, days);
        animateValue(hoursEl, hours);
        animateValue(minutesEl, minutes);
        animateValue(secondsEl, seconds);
    }

    function animateValue(element, newValue) {
        const formattedValue = String(newValue).padStart(2, '0');
        if (element.textContent !== formattedValue) {
            element.style.transform = 'translateY(-5px)';
            element.style.opacity = '0.5';
            setTimeout(() => {
                element.textContent = formattedValue;
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            }, 150);
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========================================
// Add to Google Calendar
// ========================================
function addToGoogleCalendar() {
    const event = {
        title: 'Jaseem & Haifa - Nikah Ceremony',
        start: '20260131T140000',
        end: '20260131T180000',
        location: 'Rose Lounge, Nooradi, Tirur Road, Malappuram, Kerala 676504, India',
        description: 'Nikah Ceremony of Jaseem and Haifa. We are honored to have you join us on our special day.'
    };

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;

    window.open(url, '_blank');
}

// ========================================
// RSVP Form
// ========================================
function initRSVPForm() {
    const form = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('rsvpSuccess');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            guests: formData.get('guests'),
            attendance: formData.get('attendance'),
            events: formData.getAll('events'),
            message: formData.get('message')
        };

        // Validate
        if (!data.name || !data.phone || !data.attendance) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Simulate submission
        const submitBtn = form.querySelector('.btn-submit');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
            form.style.display = 'none';
            successMessage.classList.add('show');
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            console.log('RSVP Data:', data);
        }, 1500);
    });
}

// ========================================
// Notifications
// ========================================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<span>${message}</span>`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#e74c3c' : '#A8B5A0'};
        color: white;
        padding: 16px 28px;
        border-radius: 8px;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        z-index: 10000;
        animation: slideIn 0.4s ease;
        box-shadow: 0 5px 25px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease forwards';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// ========================================
// Music Toggle
// ========================================
function initMusicToggle() {
    const toggle = document.getElementById('musicToggle');
    const audio = document.getElementById('bgMusic');

    if (!toggle || !audio) return;

    let isPlaying = false;

    toggle.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            toggle.classList.remove('playing');
        } else {
            audio.play().then(() => {
                toggle.classList.add('playing');
            }).catch(() => {
                showNotification('Unable to play audio', 'error');
            });
        }
        isPlaying = !isPlaying;
    });

    // Update state if audio is already playing
    audio.addEventListener('play', () => {
        isPlaying = true;
        toggle.classList.add('playing');
    });

    audio.addEventListener('pause', () => {
        isPlaying = false;
        toggle.classList.remove('playing');
    });
}

// ========================================
// WhatsApp Share
// ========================================
function initWhatsAppShare() {
    const btn = document.getElementById('shareWhatsapp');
    if (!btn) return;

    btn.addEventListener('click', function() {
        const message = encodeURIComponent(
            `You're Invited!\n\n` +
            `Jaseem & Haifa\n` +
            `request the pleasure of your company\n` +
            `at their Nikah Ceremony\n\n` +
            `Date: Saturday, January 31, 2026\n` +
            `Time: 2:00 PM\n` +
            `Venue: Rose Lounge, Malappuram, Kerala\n\n` +
            `RSVP & Details:\n` +
            window.location.href
        );

        window.open(`https://wa.me/?text=${message}`, '_blank');
    });
}

// ========================================
// Copy Link
// ========================================
function copyInvitationLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// ========================================
// Parallax Effects
// ========================================
function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    const sectionHeaders = document.querySelectorAll('.section-header');
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled * 0.001);
        }

        // Subtle parallax for section headers
        sectionHeaders.forEach(header => {
            const rect = header.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.05;
                const yPos = (rect.top - window.innerHeight) * speed;
                header.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

// ========================================
// Advanced Scroll Animations
// ========================================
function initScrollAnimations() {
    // Intersection Observer for reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Stagger children animations
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    child.style.animationDelay = `${index * 0.1}s`;
                    child.classList.add('stagger-animate');
                });
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        revealObserver.observe(el);
    });

    // Counter animation for countdown
    initCounterAnimation();
}

// ========================================
// Counter Animation
// ========================================
function initCounterAnimation() {
    const timeNumbers = document.querySelectorAll('.time-number');

    timeNumbers.forEach(number => {
        number.addEventListener('transitionend', () => {
            number.style.transform = 'translateY(0)';
            number.style.opacity = '1';
        });
    });
}

// ========================================
// Magnetic Hover Effect
// ========================================
function initMagneticHover() {
    const magneticElements = document.querySelectorAll('.magnetic-hover, .btn-event, .btn-calendar, .btn-submit');

    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            elem.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        elem.addEventListener('mouseleave', () => {
            elem.style.transform = 'translate(0, 0)';
        });
    });
}

// ========================================
// Floating Hearts Animation
// ========================================
function initFloatingHearts() {
    const container = document.querySelector('.hero-section');
    if (!container) return;

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

        const size = Math.random() * 15 + 10;
        const startX = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 3;

        heart.style.cssText = `
            position: absolute;
            bottom: -50px;
            left: ${startX}%;
            width: ${size}px;
            height: ${size}px;
            color: rgba(212, 84, 106, ${Math.random() * 0.3 + 0.1});
            animation: floatUp ${duration}s ease-out ${delay}s infinite;
            pointer-events: none;
            z-index: 1;
        `;

        container.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, (duration + delay) * 1000);
    }

    // Create hearts periodically
    setInterval(createHeart, 2000);

    // Create initial hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 400);
    }
}

// ========================================
// Sparkle Effect on Click
// ========================================
function initSparkleEffect() {
    document.addEventListener('click', (e) => {
        createSparkles(e.clientX, e.clientY);
    });
}

function createSparkles(x, y) {
    const colors = ['#D4546A', '#8B4D7C', '#B8860B', '#6B9080'];

    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        const angle = (i / 8) * Math.PI * 2;
        const velocity = Math.random() * 50 + 30;
        const size = Math.random() * 8 + 4;

        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: sparkleOut 0.6s ease-out forwards;
            --tx: ${Math.cos(angle) * velocity}px;
            --ty: ${Math.sin(angle) * velocity}px;
        `;

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 600);
    }
}

// ========================================
// Smooth Reveal for Images
// ========================================
function initImageReveal() {
    const images = document.querySelectorAll('img, .venue-card, .gifts-container');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('image-revealed');
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// Tilt Effect on Cards
// ========================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.event-card, .message-card, .venue-card, .gifts-container');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

// ========================================
// Add CSS Animations
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateX(100px); }
        to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100px); }
    }
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(50px) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes sparkleOut {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
    .reveal-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .reveal-on-scroll.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    .stagger-child {
        opacity: 0;
        transform: translateY(20px);
    }
    .stagger-child.stagger-animate {
        animation: staggerFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    @keyframes staggerFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .image-revealed {
        animation: springIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }
    .floating-heart svg {
        width: 100%;
        height: 100%;
    }
`;
document.head.appendChild(style);

// ========================================
// FAQ Accordion
// ========================================
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    const faqContainer = document.getElementById('faqContainer');
    const allFaqItems = faqContainer.querySelectorAll('.faq-item');

    // Close all other FAQ items
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current FAQ item
    faqItem.classList.toggle('active');
}

// Make functions globally available
window.addToGoogleCalendar = addToGoogleCalendar;
window.copyInvitationLink = copyInvitationLink;
window.toggleFaq = toggleFaq;
