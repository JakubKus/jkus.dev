import React from 'react';
import Link from 'next/link';

type Props = {
  active: boolean;
}

function Menu({ active }: Props) {
  const activeClass = active ? 'flex' : 'hidden xl:flex';

  return (
    <nav className={`${activeClass} absolute xl:relative bg-accent-3 w-full flex flex-col xl:flex-row top-navbar left-0 text-center border-t-2 border-b-2 border-black xl:border-none xl:top-0 xl:gap-x-4`}>
      {links.map((link) => (
        <Link className="text-sm xl:text-base text-accent-1 py-4 xl:pt-0 xl:pb-1.5 border-b border-black last:border-0 xl:border-0 tracking-[0.2em]" key={link.href} href={link.href}>
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
