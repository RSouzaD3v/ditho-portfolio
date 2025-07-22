// app/services/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Server, Smartphone } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criamos sites institucionais, landing pages e aplicações web modernas e responsivas.",
    icon: <Globe className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Sistemas Personalizados",
    description: "Automatize seus processos com sistemas sob medida para seu negócio.",
    icon: <Server className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Aplicativos Mobile",
    description: "Aplicativos para Android e iOS com performance e ótima experiência de uso.",
    icon: <Smartphone className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Manutenção e Suporte",
    description: "Suporte técnico contínuo e melhorias para seus sistemas já existentes.",
    icon: <Code className="h-8 w-8 text-orange-500" />,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-20">
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nossos Serviços</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Oferecemos soluções completas em tecnologia para impulsionar o crescimento do seu negócio.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="bg-neutral-900 border border-neutral-700 hover:shadow-xl transition h-full">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              {service.icon}
              <CardTitle className="text-xl text-white">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400 text-center">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
