// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-gray-400 text-lg">
          Somos uma empresa apaixonada por tecnologia e inovação. Criamos soluções digitais que geram valor real para nossos clientes.
        </p>
      </section>

      {/* Quem Somos */}
      <section className="max-w-5xl mx-auto mb-20 text-gray-300 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white text-center">Quem somos</h2>
        <p className="text-lg leading-relaxed">
          Atuamos há anos no mercado oferecendo soluções digitais para empresas de diversos setores. Nosso time é formado por especialistas em desenvolvimento web, mobile, UX/UI e infraestrutura. Nosso compromisso é entregar qualidade, performance e resultados reais através da tecnologia.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Missão",
            content:
              "Desenvolver soluções tecnológicas que contribuam para o crescimento e eficiência dos nossos clientes.",
          },
          {
            title: "Visão",
            content:
              "Ser referência nacional em desenvolvimento digital personalizado, reconhecida pela qualidade e inovação.",
          },
          {
            title: "Valores",
            content:
              "Comprometimento, ética, transparência, inovação contínua e foco total na experiência do cliente.",
          },
        ].map((item, index) => (
          <Card key={index} className="bg-neutral-900 border border-neutral-700 h-full">
            <CardHeader>
              <CardTitle className="text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400 text-sm leading-relaxed">
              {item.content}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
