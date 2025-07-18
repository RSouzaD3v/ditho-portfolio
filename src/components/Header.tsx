"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Projetos", link: "/projetos" },
    { id: 3, name: "Serviços", link: "/servicos" },
    { id: 4, name: "Sobre", link: "/sobre-nos" },
    { id: 5, name: "Clientes", link: "/clientes" },
    { id: 6, name: "Desenvolvedores", link: "/desenvolvedores" },
  ];

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center bg-black/50 backdrop-blur-xl md:px-5 p-1 justify-center flex-col text-white">
      <Container className="flex items-center justify-between py-2 px-5 md:px-0">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-2xl">Dit<b className="text-orange-300">h</b>o</h2>
          {/* <Image priority src="/logo.png" alt="Logo" width={80} height={80} className="cursor-pointer" /> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.id} className="uppercase hover:text-blue-400 transition">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Orçamento button */}
        <div className="hidden md:flex">
          <Link href="/budget" className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            <Flame size={20} />
            <span className="uppercase font-bold text-sm">Quero um Orçamento</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={handleOpen} className="flex items-center gap-2">
            <Menu size={30} />
          </button>
        </div>
      </Container>

      {/* Mobile Nav Drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[220px] bg-blue-950 text-white z-50 p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <button onClick={handleOpen} className="p-2">
            <X size={30} />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.id} className="uppercase hover:text-blue-400 transition">
                <Link href={link.link} onClick={handleOpen}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contato"
            onClick={handleOpen}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded mt-8 hover:bg-blue-600 transition"
          >
            <Flame size={20} />
            <span className="uppercase font-bold text-sm">Quero um Orçamento</span>
          </Link>
        </nav>
      </div>

      <div className="w-full h-[1px] bg-white/10"></div>
    </header>
  );
};
