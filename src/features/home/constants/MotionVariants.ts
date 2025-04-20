export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  export const dashboardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, duration: 1.2, delay: 0.6 },
    },
  };

  export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  
  export const iconContainerVariants = {
    hidden: { scale: 0.6, opacity: 0, borderRadius: "30%" },
    visible: {
      scale: 1,
      opacity: 1,
      borderRadius: "20%",
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.6,
      },
    },
  };
  
  export const iconVariants = {
    animate: {
      scale: [0.9, 1.1, 0.9],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  
  