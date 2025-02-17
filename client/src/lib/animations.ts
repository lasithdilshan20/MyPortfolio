export const slideUp = {
  initial: { y: 20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: (index: number = 0) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * index,
      duration: 0.5
    }
  })
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
