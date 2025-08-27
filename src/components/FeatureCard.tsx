import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  endpoint: string;
  onClick: () => void;
}

const FeatureCard = ({ icon: Icon, title, description, buttonText, endpoint, onClick }: FeatureCardProps) => {
  return (
    <Card className="p-8 bg-gradient-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        
        <div className="w-full space-y-3">
          <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-600 border">
            {endpoint}
          </div>
          <Button 
            onClick={onClick}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;