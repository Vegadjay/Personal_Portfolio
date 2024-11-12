import gsap from 'gsap';

export const arrowMarquee = () => {
    const marquee = document.querySelector('.marquee');
    const moveSection = document.querySelector('#move');
    const contentWidth = marquee.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    const baseDuration = (contentWidth / viewportWidth) * 10;
    
    gsap.set('.marquee', {
        xPercent: 0
    });

    const defaultColor = '#ffffff';
    const reverseColor = '#00ffff';

    let isScrolling;
    let lastScrollDirection = null;

    window.addEventListener("wheel", (e) => {
        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            gsap.to(moveSection, {
                color: defaultColor,
                duration: 0.5,
                ease: 'power2.out'
            });
        }, 150);

        if(e.deltaY > 0) {
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
        defaults: { ease: 'none' } 
    });

    tl.to('.marquee', {
        xPercent: -100,
        duration: baseDuration,
        onComplete: () => {
            gsap.set('.marquee', { xPercent: 0 });
        }
    });

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
        defaults: { ease: 'none' } 
    });

    tl.to('.marquee', {
        xPercent: 100,
        duration: baseDuration,
        onComplete: () => {
            gsap.set('.marquee', { xPercent: 0 });
        }
    });

    gsap.to('.marquee img', {
        rotation: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
}

const initializeColorTransition = () => {
    gsap.set('#move', {
        color: '#ffffff'  // Set initial color
    });
}