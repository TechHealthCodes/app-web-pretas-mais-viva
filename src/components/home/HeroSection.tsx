
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
            <div className="relative">
              <img 
                src="/lovable-uploads/a7631cb6-7ae1-4f94-8775-ace20df4f3db.png" 
                alt="Mulheres negras em conexão e relacionamento" 
                className="shadow-2xl max-w-md w-full h-auto object-cover transform rotate-3 hover:rotate-0 transition-transform duration-300"
                style={{
                  borderRadius: "60px 40px 80px 30px"
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <h2 className="font-bricolage text-xl mb-2 font-semibold text-white">
                  Nossa Comunidade
                </h2>
                <p className="text-white/90 text-sm">
                  Conectando mulheres negras em um espaço de apoio, crescimento e empoderamento mútuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
