import React from 'react';
import AvatarWithBio from '../blog/avatar-with-bio';
import Menu from './menu';
import BurgerButton from './burger-button';

const Navbar = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const toggleMenu = () => setMenuActive(prev => !prev);
  // const a =

  return (
    <>
      <header className="sticky top-0 bg-accent-3 px-pageSpacing 2xl:px-16 h-navbar 2xl:h-high-navbar shadow-navbar">
        <div className="grid h-full items-center grid-cols-2 mx-auto xl:grid-cols-navbar max-w-2xl xl:max-w-full">
          <AvatarWithBio />
          <Menu active={menuActive} />
          <BurgerButton active={menuActive} onClick={toggleMenu} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
