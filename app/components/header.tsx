import Image from "next/image";
import logo from "../../public/meuch_logo.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Header() {
  const trad = useTranslations("Index");
  const language = trad("language");

  return (
    <header className="navbar bg-slate-100 shadow-md">
      <div className="flex-1">
        <Image src={logo} alt="Meuch" width={70} height={70} />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black text-sm rounded-box">
          <li>
            <Link href={`/${language}/`}>Accueil</Link>
          </li>
          <li>
            <Link href={`/${language}/quiz`}>Quiz</Link>
          </li>
          <li>
            <Link href={`/${language}/about`}>À propos</Link>
          </li>
          <li>
            <details>
              <summary>Langues</summary>
              <ul className="menu menu-vertical px-1 text-black bg-white">
                <li>
                  <Link href={`/de/`}>DE</Link>
                </li>
                <li>
                  <Link href={`/fr/`}>FR</Link>
                </li>
                <li>
                  <Link href={`/en/`}>EN</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
}
