
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
}

const Testimonial = ({ text, author, role }: TestimonialProps) => {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-8">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-lg mb-6 italic">{text}</p>
        <div>
          <p className="font-bricolage font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Encontrei na Pretas Mais Viva um espaço de acolhimento onde posso ser quem sou. Os conteúdos sobre saúde mental me ajudaram a lidar com questões que eu nem sabia como nomear.",
      author: "Camila Ferreira",
      role: "Professora e Ativista"
    },
    {
      text: "Os workshops de educação financeira mudaram completamente minha relação com o dinheiro. Hoje tenho meu próprio negócio e faço parte de uma rede de empreendedoras negras incríveis que conheci aqui.",
      author: "Fernanda Santos",
      role: "Empreendedora"
    },
    {
      text: "Poder compartilhar experiências com outras mulheres que passam pelo que eu passo foi transformador. A comunidade é acolhedora e os conteúdos são realmente pensados para nós.",
      author: "Juliana Martins",
      role: "Profissional de Marketing"
    },
    {
      text: "Os conteúdos sobre ancestralidade me reconectaram com minhas raízes e fortaleceram minha identidade. Sinto-me mais segura e orgulhosa da minha história.",
      author: "Patricia Gomes",
      role: "Artista Visual"
    },
    {
      text: "Participar das rodas de conversa sobre maternidade preta me deu o suporte que eu precisava em um momento tão importante da minha vida. Encontrei acolhimento e informação de qualidade.",
      author: "Mariana Silva",
      role: "Enfermeira e Mãe"
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4 text-primary">
            Vozes da Nossa Comunidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra como a Pretas Mais Viva está impactando a vida de mulheres negras por todo o Brasil.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Testimonial {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static translate-x-0 translate-y-0 mr-2" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
