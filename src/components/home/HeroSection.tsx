
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bricolage mb-6 leading-tight">
              Acolhimento e crescimento para mulheres negras
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
              Um espaço seguro para compartilhar experiências, adquirir conhecimento
              e fortalecer nossa comunidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="bg-white text-primary hover:bg-secondary hover:text-white font-medium text-lg py-6 px-8">
                  Começar agora
                </Button>
              </Link>
              <Link to="/conteudos">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg py-6 px-8">
                  Explorar conteúdo
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-secondary/20 p-6 rounded-lg w-full max-w-md">
              <h2 className="font-bricolage text-2xl mb-4 font-semibold">Destaques</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors">
                    <span className="text-xs font-medium bg-secondary px-2 py-1 rounded-full">Destaque</span>
                    <h3 className="font-bricolage text-lg mt-2">Workshop de autocuidado para mulheres negras</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Aprenda técnicas para incorporar o autocuidado no seu dia a dia.
                    </p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs opacity-75">24 MAI</span>
                      <Link to="/workshop/1" className="text-sm text-secondary hover:underline">
                        Saiba mais
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
