import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  BookOpen,
  Users,
  Calendar,
  Home,
} from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Verificar se o usuário está logado (em uma aplicação real, isso viria de um contexto de autenticação)
  const isLoggedIn = false; // Por enquanto, vamos manter como falso para exemplo

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/310e41c1-eb71-4740-b5b4-edf3176828d5.png" 
            alt="Pretas Mais Viva" 
            className="h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {isLoggedIn && (
                <NavigationMenuItem>
                  <Link to="/dashboard">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <span className="flex items-center gap-1">
                        <Home className="h-4 w-4" />
                        Início
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    Conteúdos
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                    <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Vídeos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Assista aulas e workshops em vídeo
                      </p>
                    </Link>
                    <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Artigos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Leia artigos sobre diversos temas
                      </p>
                    </Link>
                    <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Podcasts</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Ouça nossos podcasts e entrevistas
                      </p>
                    </Link>
                    <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Cursos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Aprenda com nossos cursos completos
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/comunidade">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Comunidade
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/eventos">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Eventos
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-primary" />
          </Button>

          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-primary" />
              </Button>
              <Link to="/perfil">
                <Avatar className="h-8 w-8 border border-primary">
                  <AvatarFallback className="bg-primary/10 text-primary">UN</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Entrar
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Cadastrar
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 absolute top-16 left-0 right-0 z-50 shadow-md">
          <div className="flex flex-col space-y-4">
            {isLoggedIn && (
              <Link to="/dashboard" className="flex items-center gap-2 text-primary font-medium py-2" onClick={toggleMobileMenu}>
                <Home className="h-5 w-5" />
                Início
              </Link>
            )}
            
            <Link to="/conteudos" className="flex items-center gap-2 text-primary font-medium py-2" onClick={toggleMobileMenu}>
              <BookOpen className="h-5 w-5" />
              Conteúdos
            </Link>
            
            <Link to="/comunidade" className="flex items-center gap-2 text-primary font-medium py-2" onClick={toggleMobileMenu}>
              <Users className="h-5 w-5" />
              Comunidade
            </Link>
            
            <Link to="/eventos" className="flex items-center gap-2 text-primary font-medium py-2" onClick={toggleMobileMenu}>
              <Calendar className="h-5 w-5" />
              Eventos
            </Link>
            
            <div className="flex space-x-4 items-center pt-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-primary" />
              </Button>
              {isLoggedIn && (
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5 text-primary" />
                </Button>
              )}
            </div>
            
            {!isLoggedIn && (
              <div className="flex space-x-2 pt-2">
                <Link to="/login" className="w-1/2">
                  <Button variant="outline" className="w-full border-primary text-primary">
                    Entrar
                  </Button>
                </Link>
                <Link to="/signup" className="w-1/2">
                  <Button className="w-full bg-primary text-white">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Definir o componente Avatar para usar no Navbar
const Avatar = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// Definir o AvatarFallback para usar no Navbar quando não houver imagem
const AvatarFallback = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <div className={`flex items-center justify-center h-full w-full ${className}`}>
      {children}
    </div>
  );
};

export default Navbar;
