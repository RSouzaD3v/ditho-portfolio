"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Client = {
  name: string;
  feedback: string;
  image: string;
};

const clients: Client[] = [
  {
    name: "Carlos Silva",
    feedback: "A equipe foi extremamente profissional e dedicada. Melhorou muito nossa operação.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Juliana Mendes",
    feedback: "Excelente atendimento e soluções inovadoras. Recomendo fortemente!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rodrigo Oliveira",
    feedback: "Transformaram completamente a nossa presença digital. Muito satisfeito!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Ana Paula Costa",
    feedback: "Suporte ágil e execução impecável. Viraram parceiros do nosso negócio!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export function ClientsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {clients.map((client, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 p-2"
          >
            <Card className="h-full bg-neutral-900 text-white border border-neutral-700 shadow-md">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={client.image} alt={client.name} />
                  <AvatarFallback>
                    {client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <p className="text-center text-sm text-gray-300 italic">
                  &quot; {client.feedback} &quot;
                </p>
                <span className="text-sm font-semibold text-white">
                  – {client.name}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
