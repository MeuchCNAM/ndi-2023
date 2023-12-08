import Image from "next/image";
import logo from "../../public/meuch_logo.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Header() {
  const trad = useTranslations("Index");
  const language = trad("language");
  const navbarTrad = useTranslations("Navbar");

  return (
    <header className="navbar bg-white">
      <div className="flex-1">
        <Image src={logo} alt="Meuch" width={100} height={100} />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black text-3xl">
          <li>
            <Link href={`/${language}/`}>{navbarTrad("home")}</Link>
          </li>
          <li>
            <Link href={`/${language}/quiz`}>{navbarTrad("quiz")}</Link>
          </li>
          <li>
            <Link href={`/${language}/about`}>{navbarTrad("about")}</Link>
          </li>
          <li>
            <details>
              <summary className="text-3xl">{navbarTrad("language")}</summary>
              <ul className="menu menu-vertical px-1 text-black text-3xl bg-white">
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
