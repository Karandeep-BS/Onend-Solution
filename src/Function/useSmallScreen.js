import { useEffect, useState } from 'react';

export default function useSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-aspect-ratio: 3/3)'
    );

    const handleChange = (e) => setIsSmallScreen(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    setIsSmallScreen(mediaQuery.matches); // set initial value

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isSmallScreen;
}
