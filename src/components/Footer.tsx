"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-orange-950 text-white">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo e descrição */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center mb-2">
            {/* <Image
              src="/logo.png"
              alt="Ranetium Logo"
              width={50}
              height={50}
            /> */}
            <h6 className="text-2xl font-bold uppercase">
                Ditho
            </h6>
          </Link>
          <p className="text-white/70 max-w-xs">
            Desenvolvimento Web e Soluções Digitais Personalizadas para o seu negócio.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10 flex-wrap">
          <div>
            <h3 className="font-semibold mb-3 uppercase">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="hover:underline text-white/80">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:underline text-white/80">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline text-white/80">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 uppercase">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-center py-4 text-white/60 text-sm">
        © {new Date().getFullYear()} Ditho. Todos os direitos reservados.
      </div>
    </footer>
  );
};
