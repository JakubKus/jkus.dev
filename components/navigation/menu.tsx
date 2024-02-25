import React from 'react';
import Link from 'next/link';
import SocialLinks from '../social-links';
import { routes } from '../routes';
import { useRouter } from 'next/router';

type Props = {
  open: boolean;
};

const afterClass =
  'after:bg-accent-2 after:bottom-0 after:h-[1px] after:left-0 after:absolute after:scale-x-0 after:origin-right after:transition-transform after:duration-[250ms] after:w-full';
const hoverClass = 'hover:after:scale-x-100 hover:after:origin-left';
const activeClass = 'after:scale-x-100 after:origin-left';

function Menu({ open }: Props) {
  const openedClass = open ? 'flex' : 'hidden desktop:flex';
  const router = useRouter();
  const [, routeSegment] = router.pathname.split('/')
  const activeRouteClass = (routeLink: string) => routeLink === `/${routeSegment}` ? activeClass : '';

  return (
    <nav
      className={`${openedClass} absolute desktop:relative bg-accent-3 w-full flex-col desktop:flex-row top-navbar desktop:top-0 left-0 text-center border-t-2 border-b-2 border-black desktop:border-none desktop:gap-x-4`}
    >
      {routes.map(route => (
        <Link
          className={`${afterClass} ${hoverClass} ${activeRouteClass(route.link)} relative text-sm desktop:text-base text-accent-1 py-4 desktop:pt-0 desktop:pb-1.5 border-b border-black last:border-0 desktop:border-0 tracking-[0.2em]`}
          key={route.link}
          href={route.link}
        >
          {route.label}
        </Link>
      ))}
      <div className="py-4 desktop:hidden flex items-center">
        <SocialLinks mobile />
      </div>
    </nav>
  );
}

export default Menu;
