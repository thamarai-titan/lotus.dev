import { gsap } from './gsapConfig'

// Curtain wipe in
export const pageEnter = (container: Element) => {
  const tl = gsap.timeline()
  tl.set(container, { opacity: 0, y: 20 })
  tl.to(container, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
    clearProps: 'all',    // removes inline styles after animation
  })
  return tl
}

export const pageLeave = (container: Element) => {
  return gsap.to(container, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power3.in',
  })