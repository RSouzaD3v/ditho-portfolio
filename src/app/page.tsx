import { ClientsCarousel } from "@/components/ClientsCarousel";
import { HeroParallaxDemo } from "@/components/HeroParallax";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero principal */}
      <section className="w-full h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Solução e Tecnologia
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            Temos os melhores profissionais para dar um <strong className="text-orange-500">Up</strong> no seu negócio.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-6 py-2 rounded-md bg-orange-600 hover:bg-amber-700 transition">
              Saiba Mais
            </button>
            <button className="px-6 py-2 rounded-md bg-white text-black hover:bg-gray-600 hover:text-white transition">
              Entrar em contato
            </button>
          </div>
        </div>
      </section>

      {/* Hero Parallax - destaque visual */}
      <HeroParallaxDemo />

      {/* Seção de Depoimentos */}
      <section className="w-full flex flex-col items-center px-4 py-16 bg-black text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Feedbacks de Clientes
        </h2>
        <ClientsCarousel />
      </section>
    </div>
  );
}
