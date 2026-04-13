import useIsMobile from '../hooks/useIsMobile';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

export default function NavBar() {
  const isMobile = useIsMobile();
  return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
}
