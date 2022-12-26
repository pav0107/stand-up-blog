import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/../public/pav.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Pav's Blog</h1>
      </div>
      <div></div>
    </header>
  );
}
