import React from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { motion } from 'framer-motion';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { isDark, setIsDark } = useColorScheme();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      className={className}
      onClick={toggleTheme}
      animate={{ rotate: isDark ? 360 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isDark ? (
        <IoMdMoon className="w-6 h-6" />
      ) : (
        <IoMdSunny className="w-6 h-6" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
