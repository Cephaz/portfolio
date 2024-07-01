import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useColorScheme = () => {
  const systemPrefersDark = useMediaQuery({
    query: '(prefers-color-scheme: dark)',
  });
  const [isDark, setIsDark] = useState<boolean>(systemPrefersDark);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return {
    isDark,
    setIsDark,
  };
};
