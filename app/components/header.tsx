import Image from "next/image";
import logo from "../../public/meuch_logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar bg-white">
      <div className="flex-1">
        <Image src={logo} alt="Meuch" width={100} height={100} />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black text-3xl">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/quiz">Quiz</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
