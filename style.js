// Smooth scroll animation
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        observer.observe(el);
    });

    // Video playback control
    const video = document.getElementById('weddingVideo');
    
    if (video) {
        // Force unmute and set full volume
        video.muted = false;
        video.volume = 1.0;
        
        // Force play with sound
        video.play().catch(error => {
            console.log('Autoplay blocked by browser:', error);
            // Try one more time after a short delay
            setTimeout(() => {
                video.muted = false;
                video.volume = 1.0;
                video.play();
            }, 500);
        });

        // Handle visibility change
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                video.pause();
            } else {
                video.muted = false;
                video.volume = 1.0;
                video.play();
            }
        });

        // Ensure video stays unmuted
        video.addEventListener('volumechange', function() {
            if (video.muted) {
                video.muted = false;
            }
        });
    }

    // Create floating hearts animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💜';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.opacity = '0.6';
        heart.style.zIndex = '1';
        heart.style.pointerEvents = 'none';
        heart.style.transition = 'all 5s linear';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.bottom = '110vh';
            heart.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create hearts periodically
    setInterval(createFloatingHeart, 3000);

    // Add sparkle effect to title
    const title = document.querySelector('.main-title');
    if (title) {
        title.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        title.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Console message
    console.log('%c💜 Happy Wedding Rasidah Ria Salihi & Achmad Akbar 💜', 
                'font-size: 20px; color: #8B5CF6; font-weight: bold;');
    console.log('%c25 Oktober 2025 - Samarinda', 
                'font-size: 14px; color: #C4B5FD;');
});