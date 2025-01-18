import Link from "next/link";
import Logo from "./Logo";

export default function MainNavigation() {
  return (
    <nav className="bg-opacity-30 bg-gray-900 backdrop-filter backdrop-blur-lg text-white py-4 px-6 flex justify-between items-center sticky top-0 z-10">
      <Link href="/" aria-label="Home">
        <Logo />
      </Link>
      <div className="space-x-4">
        <Link href="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <Link href="/contact" className="hover:text-accent transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
