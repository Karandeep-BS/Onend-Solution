import useSmallScreen from '../Function/useSmallScreen.js';
import Footer from './Footer.js';
import MobileFooter from './MobileFooter.js';

export default function MainFooter() {
  const isSmallScreen = useSmallScreen();

  return (
    <div className='w'>
      {isSmallScreen ? (
        <MobileFooter />
      ) : (
        <Footer />
      )}
    </div>
  );
}
