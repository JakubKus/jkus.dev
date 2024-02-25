import React from 'react';
import Link from 'next/link';
import SocialLinks from '../social-links';
import { routes } from '../routes';

type Props = {
  active: boolean;
};

const afterClass =
  'after:bg-accent-2 after:bottom-0 after:h-[1px] after:left-0 after:absolute after:scale-x-0 after:origin-right after:transition-transform after:duration-[250ms] after:w-full';
const hoverClass = 'hover:after:scale-x-100 hover:after:origin-left';

function Menu({ active }: Props) {
  const activeClass = active ? 'flex' : 'hidden desktop:flex';

  return (
    <nav
      className={`${activeClass} absolute desktop:relative bg-accent-3 w-full flex-col desktop:flex-row top-navbar desktop:top-0 left-0 text-center border-t-2 border-b-2 border-black desktop:border-none desktop:gap-x-4`}
    >
      {routes.map(link => (
        <Link
          className={`${afterClass} ${hoverClass} relative text-sm desktop:text-base text-accent-1 py-4 desktop:pt-0 desktop:pb-1.5 border-b border-black last:border-0 desktop:border-0 tracking-[0.2em]`}
          key={link.href}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
      <div className="py-4 desktop:hidden flex items-center">
        <SocialLinks mobile />
      </div>
    </nav>
  );
}

export default Menu;
