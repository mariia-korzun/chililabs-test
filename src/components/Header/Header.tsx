import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-xl font-bold mt-5 mb-5 text-left self-start text-highlight">
      <Link href="/">&lt; to Products</Link>
    </header>
  );
};

export default Header;
