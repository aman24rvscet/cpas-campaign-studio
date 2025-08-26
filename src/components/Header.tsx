import { Button } from "@/components/ui/button";
import { MessageSquare, Zap, Code } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">CPaaS Generator</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#api" className="text-foreground hover:text-primary transition-colors">
            API
          </a>
          <a href="#docs" className="text-foreground hover:text-primary transition-colors">
            Docs
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Sign In
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;