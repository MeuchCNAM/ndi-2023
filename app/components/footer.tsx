import Image from "next/image";
import logo from "../../public/meuch_logo.svg";

export default function Footer() {
  return (
    <footer className="footer footer-center p-2 bg-white text-primary-content">
      <aside>
        <p className="font-bold">
          Meuch <br />
        </p>
        <p>Copyright © 2023</p>
      </aside>
    </footer>
  );
}
