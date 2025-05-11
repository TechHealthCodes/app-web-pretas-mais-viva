
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/310e41c1-eb71-4740-b5b4-edf3176828d5.png" 
              alt="Pretas Mais Viva" 
              className="h-16 mb-4"
            />
            <p className="text-sm">
              Uma plataforma de empoderamento e acolhimento para mulheres negras.
            </p>
          </div>

          <div>
            <h4 className="font-bricolage font-semibold mb-4 text-secondary">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/conteudos" className="hover:text-secondary transition-colors">Conteúdos</Link></li>
              <li><Link to="/comunidade" className="hover:text-secondary transition-colors">Comunidade</Link></li>
              <li><Link to="/eventos" className="hover:text-secondary transition-colors">Eventos</Link></li>
              <li><Link to="/sobre" className="hover:text-secondary transition-colors">Sobre nós</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bricolage font-semibold mb-4 text-secondary">Links úteis</h4>
            <ul className="space-y-2">
              <li><Link to="/politica-de-privacidade" className="hover:text-secondary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-secondary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/contato" className="hover:text-secondary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bricolage font-semibold mb-4 text-secondary">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-secondary transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-secondary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-secondary transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <Youtube className="h-6 w-6 hover:text-secondary transition-colors" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-bricolage font-semibold mb-2 text-secondary">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="px-3 py-2 rounded-l-md text-primary focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/80"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-light/20 text-center">
          <p className="text-sm flex items-center justify-center">
            &copy; {new Date().getFullYear()} Pretas Mais Viva. Feito com 
            <Heart className="h-4 w-4 mx-1 text-secondary" fill="currentColor" /> 
            para nossa comunidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
