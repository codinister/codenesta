'use client';

import Connect from '../connect/Connect';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {
  return (
    <>
      <nav>
        <DesktopNav />
        <MobileNav />
      </nav>
      <Connect />
    </>
  );
};

export default Nav;
