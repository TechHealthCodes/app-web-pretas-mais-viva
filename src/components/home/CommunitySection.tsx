
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Heart, Users } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-6 text-primary">
              Uma comunidade para acolher e conectar
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Junte-se a milhares de mulheres negras que estão compartilhando experiências,
              conhecimentos e construindo redes de apoio mútuo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <MessageCircle className="h-8 w-8 text-primary mb-2 mx-auto" />
                <p className="font-bricolage font-semibold">Fóruns de Discussão</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Users className="h-8 w-8 text-primary mb-2 mx-auto" />
                <p className="font-bricolage font-semibold">Grupos de Interesse</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Heart className="h-8 w-8 text-primary mb-2 mx-auto" />
                <p className="font-bricolage font-semibold">Apoio Mútuo</p>
              </div>
            </div>
            
            <Link to="/comunidade">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Participar da comunidade
              </Button>
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bricolage text-xl font-semibold mb-4 text-primary">
                Tópicos recentes da comunidade
              </h3>
              
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border-b border-muted pb-4 last:border-0">
                    <Link to={`/comunidade/topicos/${item}`} className="block hover:bg-muted p-3 -mx-3 rounded-md transition-colors">
                      <h4 className="font-bricolage font-medium mb-1 hover:text-primary">
                        Como lidar com a síndrome do impostor no trabalho?
                      </h4>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>por Juliana Oliveira</span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          12 respostas
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/comunidade" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                  Ver mais tópicos da comunidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
