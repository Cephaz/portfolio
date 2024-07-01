import React from 'react';
import { motion } from 'framer-motion';

interface MenuToggleProps {
  className?: string;
  onClick: () => void;
  isActive: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({
  className,
  onClick,
  isActive,
}) => {
  return (
    <motion.button
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className={`relative h-8 w-8 text-text-900 ${className}`}
      onClick={onClick}
      animate={isActive ? 'closed' : 'open'}
    >
      <motion.span
        className="absolute h-0.5 w-8 bg-background-900"
        style={{
          left: '50%',
          top: '16%',
          x: '-50%',
          y: '-50%',
        }}
        variants={{
          open: {
            rotate: '45deg',
            top: '50%',
          },
          closed: {
            rotate: '0deg',
            top: '16%',
          },
        }}
      />
      <motion.span
        className="absolute h-0.5 w-8 bg-background-900"
        style={{
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
        }}
        variants={{
          open: {
            width: ['2rem', '1rem', '0rem'],
            opacity: [1, 0.5, 0],
          },
          closed: {
            width: ['0rem', '1rem', '2rem'],
            opacity: [0, 0.5, 1],
          },
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      />
      <motion.span
        className="absolute h-0.5 w-8 bg-background-900"
        style={{
          left: '50%',
          bottom: '10%',
          x: '-50%',
          y: '-50%',
        }}
        variants={{
          open: {
            rotate: '135deg',
            top: '50%',
          },
          closed: {
            rotate: '0deg',
            bottom: '10%',
          },
        }}
      />
    </motion.button>
  );
};

export default MenuToggle;
