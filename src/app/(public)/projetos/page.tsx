// app/projects/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Caso queira combinar classes com segurança

type Project = {
  title: string;
  description: string;
  image: string;
  url?: string;
};

const projects: Project[] = [
  {
    title: "Landing Page para Startup",
    description: "Criamos uma landing page moderna e responsiva para uma startup de tecnologia.",
    image: "https://source.unsplash.com/random/800x600?startup",
    url: "#",
  },
  {
    title: "Dashboard Administrativo",
    description: "Dashboard com gráficos e controle de usuários, desenvolvido com React e Tailwind.",
    image: "https://source.unsplash.com/random/800x600?dashboard",
    url: "#",
  },
  {
    title: "Loja Virtual Completa",
    description: "E-commerce com carrinho, pagamentos e painel administrativo.",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    url: "#",
  },
  {
    title: "Aplicativo de Tarefas",
    description: "Sistema com autenticação, categorias e comentários em tarefas.",
    image: "https://source.unsplash.com/random/800x600?productivity",
    url: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-20">
      {/* Cabeçalho */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          Projetos Recentes
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Confira alguns dos nossos principais trabalhos entregues para clientes que confiaram na nossa experiência.
        </p>
      </section>

      {/* Grid de Projetos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={cn(
              "group relative overflow-hidden border border-neutral-700 bg-gradient-to-br from-neutral-900/60 to-neutral-800/60 backdrop-blur-sm transition hover:shadow-[0_0_30px_-10px_orange]",
              "hover:border-orange-500 hover:scale-[1.01]"
            )}
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">{project.description}</p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-orange-500 hover:underline"
                >
                  Ver Projeto →
                </a>
              )}
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
