import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type Props = {
  mobile?: boolean;
}

const SocialLinks = ({ mobile }: Props) => {
  const hideDesktopClass = classNames(mobile ? 'flex desktop:hidden' : 'hidden desktop:flex');
  return (
    <div className={`${hideDesktopClass} flex items-center gap-x-2.5 gap-y-1 mx-auto desktop:mr-0`}>
      <a href="https://www.linkedin.com/in/jakub-kus" rel="noopener noreferrer">
        <Image
          src="/assets/icons/linkedin.svg"
          width={24}
          height={24}
          alt="visit Jakub's LinkedIn profile"
          className="w-6 h-6 object-contain"
        />
      </a>
      <a href="https://github.com/JakubKus" rel="noopener noreferrer">
        <Image
          src="/assets/icons/github.png"
          width={24}
          height={24}
          alt="visit Jakub's GitHub profile"
        />
      </a>
      <a href="https://instagram.com/jkus.dev" rel="noopener noreferrer">
        <Image
          src="/assets/icons/instagram.svg"
          width={24}
          height={24}
          alt="visit Jakub's Instagram profile"
        />
      </a>
      <a href="https://www.youtube.com/@jakub-kus" rel="noopener noreferrer">
        <Image
          src="/assets/icons/youtube.png"
          width={24}
          height={24}
          alt="visit Jakub's YouTube channel"
          className="w-6 h-6 object-contain"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
