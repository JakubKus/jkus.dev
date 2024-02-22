import Link from 'next/link';

const Header = () => {
  return (
    <h2 className="text-2xl font-extrabold leading-tight mb-7 mt-8">
      <Link href="/">Home</Link>
    </h2>
  );
};

export default Header;
