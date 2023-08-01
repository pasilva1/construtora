import "./globals.css";
import Link from "next/link";
import sizes from "./layoutSizes.module.css";
import header from "./header.module.css";
import footer from "./footer.module.css";

import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiPhoneFill,
  RiSendPlaneFill,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";

import { AiOutlineEllipsis } from "react-icons/ai";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Construtora",
  description: "webpage para construtora",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header className={sizes.header}>
          <div className={sizes.headerContainer}>
            {/* HEADER */}
            <div className={header.logo}>
              <Link href="/">
                <AiOutlineEllipsis />
              </Link>
            </div>
            <ul className={header.menu}>
              <li>
                <Link href="/">Serviços</Link>
              </li>
              <li>
                <Link href="/">Administrativo</Link>
              </li>
              <li>
                <Link href="/">Sobre</Link>
              </li>
              <li>
                <Link href="/">Denúncia</Link>
              </li>
              <li>
                <Link href="/">Localização</Link>
              </li>
            </ul>
            {/* HEADER */}
          </div>
        </header>
        <main className={sizes.main}>
          <div className={sizes.mainContainer}>
            {/* CONTENT */}
            {children}
            {/* CONTENT */}
          </div>
        </main>
        <footer className={sizes.footer}>
          <div className={sizes.footerContainer}>
            {/* FOOTER */}
            <div className={footer.info}>
              <div className={footer.copy}>
                <p>
                  <span>© 2023</span> Construtora
                </p>
              </div>
              <div className={footer.integridade}>
                <div>
                  Integridade <RiArrowDropDownLine />
                </div>
              </div>
            </div>

            <div className={footer.social}>
              <div className={footer.contato}>
                <Link href="./">
                  <RiPhoneFill />
                  (11) 99999-9999
                </Link>
                <Link href="./">
                  <RiSendPlaneFill />
                  mail@mail.com
                </Link>
              </div>

              <div className={footer.network}>
                <Link href="/">
                  <RiFacebookBoxFill />
                </Link>
                <Link href="/">
                  <RiInstagramFill />
                </Link>
                <Link href="/">
                  <RiYoutubeFill />
                </Link>
                <Link href="/">
                  <RiLinkedinBoxFill />
                </Link>
              </div>
            </div>
            {/* FOOTER */}
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
