
import { 
  BrainCog, 
  HeartHandshake, 
  Sparkles, 
  BookText, 
  DollarSign, 
  Users 
} from "lucide-react";

interface TopicCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const TopicCard = ({ icon: Icon, title, description }: TopicCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md hover:-translate-y-1 group cursor-pointer">
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-bricolage text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturedTopics = () => {
  const topics = [
    {
      icon: BrainCog,
      title: "Saúde Mental",
      description: "Conteúdos sobre bem-estar emocional e psicológico para mulheres negras."
    },
    {
      icon: Sparkles,
      title: "Autocuidado",
      description: "Dicas e práticas para cuidar de si mesma de forma holística."
    },
    {
      icon: DollarSign,
      title: "Finanças",
      description: "Educação financeira e estratégias para prosperidade econômica."
    },
    {
      icon: HeartHandshake,
      title: "Empreendedorismo",
      description: "Construa seu negócio com estratégias para mulheres negras."
    },
    {
      icon: BookText,
      title: "Ancestralidade",
      description: "Reconecte-se com suas raízes e história cultural."
    },
    {
      icon: Users,
      title: "Relacionamentos",
      description: "Construindo relações saudáveis e empoderadas."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4 text-primary">
            Tópicos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossos conteúdos organizados por temas relevantes para o seu desenvolvimento pessoal e profissional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <TopicCard key={index} {...topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopics;
