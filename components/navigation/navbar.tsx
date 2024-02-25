import React from 'react';
import AvatarWithBio from '../avatar-with-bio';
import Menu from './menu';
import BurgerButton from './burger-button';
import SocialLinks from '../social-links';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const toggleMenu = () => setMenuOpened(prev => !prev);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-navbar wideDesktop:h-desktopNavbar bg-accent-3 px-pageSpacing wideDesktop:px-16 shadow-navbar">
        <div className="grid h-full items-center grid-cols-2 desktop:grid-cols-navbar mx-auto max-w-content desktop:max-w-full">
          <AvatarWithBio />
          <Menu open={menuOpened} />
          <BurgerButton active={menuOpened} onClick={toggleMenu} />
          <SocialLinks />
        </div>
      </header>
    </>
  );
};

export default Navbar;
