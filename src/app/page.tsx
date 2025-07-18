import { HeroParallaxDemo } from "@/components/HeroParallax";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <section className="bg-black w-full max-h-[700px] h-screen flex items-center justify-center">
        <div className="text-center flex items-center flex-col space-y-5">
          <div>
            <h1 className="text-6xl font-bold mb-2">Solução e Tecnologia</h1>
            <p>Temos os melhores profissionais para dar um Up no seu negócio.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl bg-orange-600 cursor-pointer hover:bg-amber-800">Saiba Mais</button>
            <button className="bg-white text-black p-2 rounded-xl cursor-pointer hover:bg-gray-600 hover:text-white">Entrar em contato</button>
          </div>
        </div>
      </section>

      <HeroParallaxDemo />
    </div>
  );
}
