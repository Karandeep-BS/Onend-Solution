import useSmallScreen from '../Function/useSmallScreen.js';
import Navbar from './navbar.js';
import MobileNavbar from './Mobile-Navbar.js';

export default function MainNavbar() {
  const isSmallScreen = useSmallScreen();

  return (
    <div className='w'>
      {isSmallScreen ? (
        <MobileNavbar />
      ) : (
        <Navbar />
      )}
    </div>
  );
}
