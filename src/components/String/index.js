import gsap from 'gsap';

let startingPosition = `M 10 100 Q 500 100 990 100`;
const normalPosition = `M 10 100 Q 500 100 990 100`;

export const setupEventListeners = (element) => {
  if (element) {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      const relativeX = e.clientX - rect.left;

      const constrainedY = Math.max(50, Math.min(relativeY, 150));
      const constrainedX = Math.max(200, Math.min(relativeX, 800));

      startingPosition = `M 10 100 Q ${constrainedX} ${constrainedY} 990 100`;

      gsap.to("svg path", {
        attr: { d: startingPosition },
        duration: 0.2,
        ease: "power3.out"
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to("svg path", {
        attr: { d: normalPosition },
        duration: 0.5,
        ease: "elastic.out(1.75, 0.1)",
      });
    });
  }
};
