
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
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    interests: [] as string[],
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (value: string) => {
    setFormData((prev) => {
      const currentInterests = prev.interests;
      if (currentInterests.includes(value)) {
        return { ...prev, interests: currentInterests.filter(interest => interest !== value) };
      } else {
        return { ...prev, interests: [...currentInterests, value] };
      }
    });
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: "Por favor preencha todos os campos",
        description: "Nome, email e senha são obrigatórios",
        variant: "destructive",
      });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "As senhas não coincidem",
        description: "Por favor, verifique se as senhas são iguais",
        variant: "destructive",
      });
      return false;
    }
    if (formData.password.length < 8) {
      toast({
        title: "Senha muito curta",
        description: "Sua senha deve ter pelo menos 8 caracteres",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // This would normally be an API call
    setTimeout(() => {
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Bem-vinda à comunidade Pretas Mais Viva!",
      });
      setLoading(false);
    }, 1500);
  };

  const interests = [
    "Saúde Mental",
    "Empreendedorismo",
    "Autocuidado",
    "Finanças",
    "Ancestralidade",
    "Carreira",
    "Maternidade",
    "Relacionamentos",
    "Educação",
    "Autoestima",
    "Ativismo",
    "Bem-estar"
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <img 
          src="/lovable-uploads/310e41c1-eb71-4740-b5b4-edf3176828d5.png"
          alt="Pretas Mais Viva"
          className="h-16 mx-auto mb-2"
        />
        <CardTitle className="text-2xl font-bricolage text-primary">Crie sua conta</CardTitle>
        <CardDescription>
          Junte-se à comunidade Pretas Mais Viva
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {step === 1 ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Seu nome completo" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
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
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="Crie uma senha segura" 
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirme sua senha</Label>
              <Input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                placeholder="Digite novamente sua senha" 
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-bricolage font-semibold">Selecione seus interesses</h3>
            <p className="text-muted-foreground text-sm">
              Isso nos ajudará a personalizar sua experiência. Você pode selecionar quantos quiser.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox 
                    id={interest} 
                    checked={formData.interests.includes(interest)} 
                    onCheckedChange={() => handleInterestChange(interest)}
                  />
                  <Label htmlFor={interest} className="cursor-pointer">{interest}</Label>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-4">
        {step === 1 ? (
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handleNextStep}
          >
            Próximo
          </Button>
        ) : (
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Finalizar cadastro"}
          </Button>
        )}
        
        <div className="text-sm text-center">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-primary hover:text-primary/90 font-medium">
            Entrar
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
