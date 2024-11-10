import gsap from 'gsap';

export const arrowMarquee = () => {
    const marquee = document.querySelector('.marquee');
    const moveSection = document.querySelector('#move');
    const contentWidth = marquee.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    const baseDuration = (contentWidth / viewportWidth) * 10;
    
    // Initial state
    gsap.set('.marquee', {
        xPercent: 0
    });

    // Default color
    const defaultColor = '#ffffff';  // White
    // Color for reverse scroll
    const reverseColor = '#00ffff';  // Cyan

    let isScrolling;
    let lastScrollDirection = null;

    window.addEventListener("wheel", (e) => {
        // Clear the previous timeout
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
            // Reset color when scrolling stops
            gsap.to(moveSection, {
                color: defaultColor,
                duration: 0.5,
                ease: 'power2.out'
            });
        }, 150);

        if(e.deltaY > 0) {
            // Forward scroll
            if(lastScrollDirection !== 'forward') {
                gsap.to(moveSection, {
                    color: defaultColor,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                lastScrollDirection = 'forward';
            }
            rightScroll(baseDuration);
        } else {
            // Reverse scroll
            if(lastScrollDirection !== 'reverse') {
                gsap.to(moveSection, {
                    color: reverseColor,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                lastScrollDirection = 'reverse';
            }
            leftScroll(baseDuration);
        }
    });   
}

const rightScroll = (baseDuration) => {
    gsap.killTweensOf('.marquee');

    const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'none' }  // Changed to 'none' for smoother scrolling
    });

    tl.to('.marquee', {
        xPercent: -100,
        duration: baseDuration,
        onComplete: () => {
            gsap.set('.marquee', { xPercent: 0 });
        }
    });

    // Smooth arrow rotation
    gsap.to('.marquee img', {
        rotation: 180,
        duration: 0.6,
        ease: 'power2.out'
    });
}

const leftScroll = (baseDuration) => {
    gsap.killTweensOf('.marquee');

    const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'none' }  // Changed to 'none' for smoother scrolling
    });

    tl.to('.marquee', {
        xPercent: 100,
        duration: baseDuration,
        onComplete: () => {
            gsap.set('.marquee', { xPercent: 0 });
        }
    });

    // Smooth arrow rotation
    gsap.to('.marquee img', {
        rotation: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
}

// Optional: Add this function if you want a smooth color transition when scrolling starts
const initializeColorTransition = () => {
    gsap.set('#move', {
        color: '#ffffff'  // Set initial color
    });
}