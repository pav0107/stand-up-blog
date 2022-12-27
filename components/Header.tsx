import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex flex-col justify-between px-10 py-10 font-bold">
      <h1 className="text-7xl">Adventures in Stand-Up</h1>
      <h2 className="mt-5 text-gray-400 md:mt-0">
        Ramblings, musings and diatribes on my experiences of stand-up comedy.
      </h2>
      <div className="flex items-center mt-4 space-x-2">
        <Link href="https://www.pavrao.com">
          <Image
            className="rounded-full"
            src="/PavComicBoom.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1 className="text-gray-400">Pav Rao</h1>
      </div>
    </div>
  );
}
