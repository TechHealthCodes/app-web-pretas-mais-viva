
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // This would normally be an API call
    setTimeout(() => {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vinda de volta à Pretas Mais Viva!",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <img 
          src="/lovable-uploads/310e41c1-eb71-4740-b5b4-edf3176828d5.png"
          alt="Pretas Mais Viva"
          className="h-16 mx-auto mb-2"
        />
        <CardTitle className="text-2xl font-bricolage text-primary">Entrar</CardTitle>
        <CardDescription>
          Acesse sua conta na comunidade Pretas Mais Viva
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="seuemail@exemplo.com" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Senha</Label>
              <Link to="/recuperar-senha" className="text-sm text-primary hover:text-primary/90">
                Esqueceu a senha?
              </Link>
            </div>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              placeholder="Sua senha" 
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-center">
          Ainda não tem uma conta?{" "}
          <Link to="/signup" className="text-primary hover:text-primary/90 font-medium">
            Cadastre-se agora
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
