
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Play, 
  BookOpen, 
  Headphones, 
  Calendar, 
  Heart,
  Clock,
  Bell,
  TrendingUp
} from "lucide-react";

const Dashboard = () => {
  const [userName, setUserName] = useState("Usuária");
  const [currentPeriod, setCurrentPeriod] = useState("");

  useEffect(() => {
    // Determinar saudação baseada no período do dia
    const hour = new Date().getHours();
    if (hour < 12) setCurrentPeriod("Bom dia");
    else if (hour < 18) setCurrentPeriod("Boa tarde");
    else setCurrentPeriod("Boa noite");

    // Em uma implementação real, buscaríamos os dados do usuário de uma API
    // setUserName(userData.name);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        {/* Cabeçalho personalizado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bricolage font-bold text-primary">
              {currentPeriod}, {userName}!
            </h1>
            <p className="text-muted-foreground mt-1">
              O que você gostaria de explorar hoje?
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5 text-primary" />
            </Button>
            <Link to="/perfil">
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarImage src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce" />
                <AvatarFallback className="bg-primary/20 text-primary">UN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>

        {/* Cartões de acesso rápido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Continue assistindo</h3>
                <p className="text-xs text-muted-foreground">Continuar de onde parou</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Favoritos</h3>
                <p className="text-xs text-muted-foreground">Seus conteúdos salvos</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Próximos eventos</h3>
                <p className="text-xs text-muted-foreground">Veja o calendário</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Sua jornada</h3>
                <p className="text-xs text-muted-foreground">Acompanhe seu progresso</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conteúdo personalizado em abas */}
        <Tabs defaultValue="novidades" className="mb-10">
          <TabsList className="justify-start mb-6">
            <TabsTrigger value="novidades" className="font-bricolage">Novidades</TabsTrigger>
            <TabsTrigger value="recomendados" className="font-bricolage">Recomendados</TabsTrigger>
            <TabsTrigger value="favoritos" className="font-bricolage">Favoritos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="novidades" className="space-y-6">
            <h2 className="text-2xl font-bricolage font-bold text-primary mb-4">Adicionados recentemente</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Conteúdos recentes */}
              <ContentCard 
                type="video" 
                image="https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324"
                title="Autocuidado e autoestima para mulheres negras" 
                author="Dra. Maria Silva"
                date="Ontem" 
                duration="24:15"
              />
              
              <ContentCard 
                type="article" 
                image="https://images.unsplash.com/photo-1520333789090-1afc82db536a"
                title="A saúde mental em tempos de pandemia" 
                author="Fernanda Santos"
                date="Há 2 dias" 
              />
              
              <ContentCard 
                type="podcast" 
                image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618"
                title="Conversando sobre representatividade" 
                author="Laura Castro"
                date="Há 3 dias" 
                duration="38:27"
              />
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-primary text-primary">
                Ver mais novidades
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="recomendados">
            <h2 className="text-2xl font-bricolage font-bold text-primary mb-4">Recomendados para você</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Conteúdos recomendados baseados nos interesses do usuário */}
              <ContentCard 
                type="video" 
                image="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc"
                title="Finanças pessoais: primeiros passos" 
                author="Ana Oliveira"
                date="Há 1 semana" 
                duration="18:42"
              />
              
              <ContentCard 
                type="article" 
                image="https://images.unsplash.com/photo-1553484771-047a44eee7a1"
                title="Ancestralidade e identidade" 
                author="Juliana Lima"
                date="Há 5 dias" 
              />
              
              <ContentCard 
                type="podcast" 
                image="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
                title="Saúde da mulher negra: especificidades" 
                author="Dra. Camila Rocha"
                date="Há 1 semana" 
                duration="42:15"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="favoritos">
            <h2 className="text-2xl font-bricolage font-bold text-primary mb-4">Seus favoritos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Conteúdos favoritados pelo usuário */}
              <ContentCard 
                type="event" 
                image="https://images.unsplash.com/photo-1536080106390-fce1826a9138"
                title="Roda de conversa: autocuidado" 
                author="Coletivo Afromulher"
                date="25 jun 2023" 
              />
              
              <ContentCard 
                type="video" 
                image="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692"
                title="Workshop de empreendedorismo feminino" 
                author="Carla Mendes"
                date="22 abr 2023" 
                duration="45:10"
              />
              
              <ContentCard 
                type="article" 
                image="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                title="Maternidade negra: desafios e potências" 
                author="Regina Sousa"
                date="05 mai 2023" 
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Seção de vídeos em destaque */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bricolage font-bold text-primary">Vídeos em destaque</h2>
            <Button variant="link" className="text-primary">
              Ver todos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Vídeos em destaque */}
            <VideoCard 
              image="https://images.unsplash.com/photo-1581368087167-7055112a3c2e"
              title="Tranças e penteados afro" 
              duration="12:35"
            />
            
            <VideoCard 
              image="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              title="Maquiagem para pele negra" 
              duration="18:22"
            />
            
            <VideoCard 
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              title="Empreendedorismo feminino negro" 
              duration="32:47"
            />
            
            <VideoCard 
              image="https://images.unsplash.com/photo-1558443957-d056622df610"
              title="Yoga e meditação para iniciantes" 
              duration="25:10"
            />
          </div>
        </section>

        {/* Seção de próximos eventos */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bricolage font-bold text-primary">Próximos eventos</h2>
            <Button variant="link" className="text-primary">
              Ver calendário
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eventos */}
            <EventCard 
              title="Workshop: Finanças para empreendedoras negras"
              image="https://images.unsplash.com/photo-1503428593586-e225b39bddfe"
              date="02 jul 2023"
              time="19:00 - 21:00"
              location="Online (Zoom)"
            />
            
            <EventCard 
              title="Encontro de mentoria: desenvolvimento profissional"
              image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
              date="15 jul 2023"
              time="15:00 - 17:30"
              location="Espaço Cultural - São Paulo"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface ContentCardProps {
  type: "video" | "article" | "podcast" | "event";
  image: string;
  title: string;
  author: string;
  date: string;
  duration?: string;
}

const ContentCard = ({ type, image, title, author, date, duration }: ContentCardProps) => {
  const typeIcons = {
    video: <Play className="h-4 w-4" />,
    article: <BookOpen className="h-4 w-4" />,
    podcast: <Headphones className="h-4 w-4" />,
    event: <Calendar className="h-4 w-4" />,
  };

  const typeLabels = {
    video: "Vídeo",
    article: "Artigo",
    podcast: "Podcast",
    event: "Evento",
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          {typeIcons[type]}
          {typeLabels[type]}
        </div>
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
            {duration}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-base mb-1 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

interface VideoCardProps {
  image: string;
  title: string;
  duration: string;
}

const VideoCard = ({ image, title, duration }: VideoCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-md group">
      <div className="aspect-video relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
            <Play className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-0.5 rounded text-xs">
          {duration}
        </div>
      </div>
      <h3 className="mt-2 font-medium text-sm line-clamp-2">{title}</h3>
    </div>
  );
};

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
}

const EventCard = ({ title, image, date, time, location }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <CardContent className="p-4 sm:w-2/3">
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{date} • {time}</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1">
                <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span>{location}</span>
            </div>
          </div>
          <div className="mt-4">
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
              Inscrever-se
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Dashboard;
