import React from 'react';
import Link from 'next/link';

type Props = {
  active: boolean;
};

function Menu({ active }: Props) {
  const activeClass = active ? 'flex' : 'hidden desktop:flex';
  return (
    <nav
      className={`${activeClass} absolute desktop:relative bg-accent-3 w-full flex-col desktop:flex-row top-navbar desktop:top-0 left-0 text-center border-t-2 border-b-2 border-black desktop:border-none desktop:gap-x-4`}
    >
      {links.map(link => (
        <Link
          className="text-sm desktop:text-base text-accent-1 py-4 desktop:pt-0 desktop:pb-1.5 border-b border-black last:border-0 desktop:border-0 tracking-[0.2em]"
          key={link.href}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

const links = [
  { href: '/blog', label: 'BLOG' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/about-me', label: 'ABOUT ME' },
  { href: '/books', label: 'BOOKS' },
  { href: '/tools', label: 'TOOLS' },
];

export default Menu;
