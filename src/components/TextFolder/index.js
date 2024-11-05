import gsap from 'gsap'

export const arrowMarquee = () => {
    const marquee = document.querySelector('.marquee');
    const contentWidth = marquee.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    const baseDuration = (contentWidth / viewportWidth) * 10;
    
    gsap.set('.marquee', {
        xPercent: 0
    });

    window.addEventListener("wheel", (e) => {
        if(e.deltaY > 0) {
            rightScroll(baseDuration);
        } else {
            leftScroll(baseDuration);
        }
    });   
}

const rightScroll = (baseDuration) => {
    gsap.killTweensOf('.marquee');

    const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'linear' }
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
        duration: 0.5
    });
}

const leftScroll = (baseDuration) => {
    gsap.killTweensOf('.marquee');

    const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'linear' }
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
        duration: 0.5
    });
}