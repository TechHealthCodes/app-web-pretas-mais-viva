import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Headphones, Calendar, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

interface ContentItemProps {
  type: "video" | "article" | "podcast" | "event";
  image: string;
  title: string;
  author: string;
  date: string;
  duration?: string;
  link: string;
  isYoutube?: boolean;
}

const ContentItem = ({ type, image, title, author, date, duration, link, isYoutube }: ContentItemProps) => {
  const typeIcons = {
    video: isYoutube ? <Youtube className="h-5 w-5" /> : <Play className="h-5 w-5" />,
    article: <BookOpen className="h-5 w-5" />,
    podcast: <Headphones className="h-5 w-5" />,
    event: <Calendar className="h-5 w-5" />,
  };

  const typeLabels = {
    video: isYoutube ? "YouTube" : "Vídeo",
    article: "Artigo",
    podcast: "Podcast",
    event: "Evento",
  };

  const handleVideoClick = (e: React.MouseEvent, youtubeLink: string) => {
    if (isYoutube) {
      e.preventDefault();
      window.open(youtubeLink, '_blank');
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          {typeIcons[type]}
          {typeLabels[type]}
        </div>
        {duration && (
          <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs">
            {duration}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        {isYoutube ? (
          <a href={link} onClick={(e) => handleVideoClick(e, link)} target="_blank" rel="noopener noreferrer">
            <h3 className="font-bricolage font-semibold text-lg mb-2 hover:text-primary transition-colors">
              {title}
            </h3>
          </a>
        ) : (
          <Link to={link}>
            <h3 className="font-bricolage font-semibold text-lg mb-2 hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
        )}
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedContent = () => {
  // Sample data - in a real app this would come from an API
  const videos = [
    {
      type: "video" as const,
      image: "https://i.ytimg.com/vi/Mg1A1NoMJAU/maxresdefault.jpg",
      title: "Autocuidado e autoestima para mulheres negras",
      author: "Canal Preta & Gorda",
      date: "15 mai 2023",
      duration: "24:15",
      link: "https://www.youtube.com/watch?v=Mg1A1NoMJAU",
      isYoutube: true
    },
    {
      type: "video" as const,
      image: "https://i.ytimg.com/vi/qWrs1QnZ3PY/maxresdefault.jpg",
      title: "Finanças pessoais: primeiros passos para mulheres negras",
      author: "Nath Finanças",
      date: "03 jun 2023",
      duration: "18:42",
      link: "https://www.youtube.com/watch?v=qWrs1QnZ3PY",
      isYoutube: true
    },
    {
      type: "video" as const,
      image: "https://i.ytimg.com/vi/pGun7N_cWgc/maxresdefault.jpg",
      title: "Workshop de empreendedorismo feminino negro",
      author: "PretaHub",
      date: "22 abr 2023",
      duration: "45:10",
      link: "https://www.youtube.com/watch?v=pGun7N_cWgc",
      isYoutube: true
    }
  ];
  
  const articles = [
    {
      type: "article" as const,
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a",
      title: "A importância da saúde mental para mulheres negras",
      author: "Fernanda Santos",
      date: "10 jun 2023",
      link: "/conteudos/artigos/1"
    },
    {
      type: "article" as const,
      image: "https://images.unsplash.com/photo-1553484771-047a44eee7a1",
      title: "Ancestralidade e identidade: reconectando com nossas raízes",
      author: "Juliana Lima",
      date: "28 mai 2023",
      link: "/conteudos/artigos/2"
    },
    {
      type: "article" as const,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      title: "Maternidade negra: desafios e potências",
      author: "Regina Sousa",
      date: "05 mai 2023",
      link: "/conteudos/artigos/3"
    }
  ];
  
  const podcasts = [
    {
      type: "podcast" as const,
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
      title: "Conversando sobre representatividade na mídia",
      author: "Laura Castro",
      date: "20 jun 2023",
      duration: "38:27",
      link: "/conteudos/podcasts/1"
    },
    {
      type: "podcast" as const,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
      title: "Saúde da mulher negra: especificidades e cuidados",
      author: "Dra. Camila Rocha",
      date: "12 jun 2023",
      duration: "42:15",
      link: "/conteudos/podcasts/2"
    },
    {
      type: "podcast" as const,
      image: "https://images.unsplash.com/photo-1581368135153-a506cf13531c",
      title: "Carreira e protagonismo: mulheres negras no mercado",
      author: "Patrícia Gomes",
      date: "01 jun 2023",
      duration: "35:08",
      link: "/conteudos/podcasts/3"
    }
  ];
  
  const events = [
    {
      type: "event" as const,
      image: "https://images.unsplash.com/photo-1536080106390-fce1826a9138",
      title: "Roda de conversa: autocuidado e práticas ancestrais",
      author: "Coletivo Afromulher",
      date: "25 jun 2023",
      link: "/eventos/1"
    },
    {
      type: "event" as const,
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
      title: "Workshop: Finanças para empreendedoras negras",
      author: "Instituto Mulheres Negras",
      date: "02 jul 2023",
      link: "/eventos/2"
    },
    {
      type: "event" as const,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "Encontro de mentoria: desenvolvimento profissional",
      author: "Rede Empoderadas",
      date: "15 jul 2023",
      link: "/eventos/3"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4 text-primary">
            Conteúdos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossos materiais atualizados regularmente para seu desenvolvimento pessoal e coletivo.
          </p>
        </div>
        
        <Tabs defaultValue="videos">
          <TabsList className="mb-8 mx-auto justify-center">
            <TabsTrigger value="videos" className="font-bricolage">Vídeos</TabsTrigger>
            <TabsTrigger value="artigos" className="font-bricolage">Artigos</TabsTrigger>
            <TabsTrigger value="podcasts" className="font-bricolage">Podcasts</TabsTrigger>
            <TabsTrigger value="eventos" className="font-bricolage">Eventos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <ContentItem key={index} {...video} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="artigos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ContentItem key={index} {...article} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="podcasts" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcasts.map((podcast, index) => (
                <ContentItem key={index} {...podcast} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="eventos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <ContentItem key={index} {...event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-10">
          <Link to="/conteudos">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Ver todos os conteúdos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
