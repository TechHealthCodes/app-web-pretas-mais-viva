
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/310e41c1-eb71-4740-b5b4-edf3176828d5.png" 
            alt="Pretas Mais Viva" 
            className="h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/conteudos" className="text-primary font-medium story-link">Conteúdos</Link>
          <Link to="/comunidade" className="text-primary font-medium story-link">Comunidade</Link>
          <Link to="/eventos" className="text-primary font-medium story-link">Eventos</Link>
          <Link to="/sobre" className="text-primary font-medium story-link">Sobre</Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-primary" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-primary" />
          </Button>
          <Link to="/login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Entrar
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Cadastrar
            </Button>
          </Link>
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
            <Link to="/conteudos" className="text-primary font-medium py-2" onClick={toggleMobileMenu}>
              Conteúdos
            </Link>
            <Link to="/comunidade" className="text-primary font-medium py-2" onClick={toggleMobileMenu}>
              Comunidade
            </Link>
            <Link to="/eventos" className="text-primary font-medium py-2" onClick={toggleMobileMenu}>
              Eventos
            </Link>
            <Link to="/sobre" className="text-primary font-medium py-2" onClick={toggleMobileMenu}>
              Sobre
            </Link>
            
            <div className="flex space-x-4 items-center pt-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-primary" />
              </Button>
            </div>
            
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
