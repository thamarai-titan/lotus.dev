import { gsap, ScrollTrigger } from './gsapConfig'

// Fade up — use on any section
export const fadeUpOnScroll = (
  target: string | Element,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    target,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top 85%',
        end: 'top 40%',
        scrub: false,     // false = snap animation, true = scrubs with scroll
        toggleActions: 'play none none reverse',
      },
      ...options,
    }
  )
}

// Stagger children
export const staggerChildren = (
  parent: string | Element,
  childSelector: string,
  staggerAmount = 0.1
) => {
  return gsap.fromTo(
    `${parent} ${childSelector}`,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: staggerAmount,
      scrollTrigger: {
        trigger: parent as Element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

// Horizontal scroll section
export const horizontalScroll = (containerRef: React.RefObject<HTMLElement>) => {
  const panels = gsap.utils.toArray('.h-panel')

  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: containerRef.current,
      pin: true,           // PINS element during scroll
      scrub: 1,            // smooth scrubbing, 1 = 1s lag
      snap: 1 / (panels.length - 1),
      end: () => `+=${containerRef.current?.offsetWidth}`,
    },
  })
}

// Parallax layer
export const parallaxLayer = (
  target: string | Element,
  speed = 0.5        // 0 = no parallax, 1 = full scroll speed
) => {
  gsap.to(target, {
    yPercent: -30 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: target as Element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}