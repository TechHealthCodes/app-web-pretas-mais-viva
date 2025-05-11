
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-6">
          Junte-se à comunidade Pretas Mais Viva
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Faça parte de um espaço de acolhimento, conhecimento e fortalecimento para mulheres negras.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button className="bg-white text-primary hover:bg-secondary hover:text-white text-lg py-6 px-8">
              Cadastre-se gratuitamente
            </Button>
          </Link>
          <Link to="/sobre">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
