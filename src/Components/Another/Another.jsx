import React from 'react';
import { motion } from 'framer-motion';

const Another = () => {
  const parentVariant = {
    hidden: {
      x: "-100vw",
      opacity: 0,
      padding: 50,
      textAlign: 'center',
      background: 'red',
    },
    visible: {
      x: "0vw",
      background: 'green',
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        mass: 1,
        damping: .1,
        staggerChildren: 1,
        when: "beforeChildren",
      }
    }
  }

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1, // Duration of the fade effect
        ease: 'easeInOut', 
      }
    },
    hover: {
      scale: 1.2,
      yoyo: 1.5,
      color: "red"
    },
    tap: {
      scale: .7,
      color: 'white'
    }
  }

  return (
    <>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={childVariant}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          whileTap='tap'
        >
          Click
        </motion.button>
      </motion.div>
    </>
  );
}

export default Another;
