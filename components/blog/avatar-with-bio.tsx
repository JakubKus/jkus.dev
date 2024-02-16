import Image from 'next/image';
import { BIO_LINES } from '../../constants';

const author = {
  picture: '/assets/blog/author/jakub.jpg',
  bioLines: BIO_LINES,
};

const AvatarWithBio = () => {
  return (
    <div className="flex items-center pr-4">
      <Image
        src={author.picture}
        className="w-12 h-12 rounded-full mr-4"
        alt="Jakub Kuś profile picture"
        height={48}
        width={48}
      />
      <div>
        {author.bioLines.map(line => (
          <p key={line} className="text-sm 2xl:text-base leading-tight tracking-wide text-white">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AvatarWithBio;
