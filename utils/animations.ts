import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
interface AnimationProps {
  transform: string;
  duration: number;
  // Add more properties if needed
}
interface AnimProps {
  [key: string]: any; // Allow any additional properties
}

interface ScrollProps {
  [key: string]: any; // Allow any additional properties
}

export const animateWithGsap = (target:string, animationProps:AnimProps, scrollProps:ScrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: any, 
  rotationRef: any, 
  rotationState: any,
  firstTarget: string,
  secondTarget: string,
  animationProps: AnimationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
