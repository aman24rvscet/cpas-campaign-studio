import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { MessageSquare, Image, Zap, ArrowRight, Sparkles, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Sparkles className="w-4 h-4 text-teal" />
                <span className="text-sm font-medium text-foreground">AI-Powered Campaign Generation</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Create Perfect <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Marketing Campaigns
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Generate WhatsApp & RCS promotional messages, create AI-powered campaign images, 
                and build complete marketing campaigns with our powerful CPaaS API.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft text-lg px-8">
                Start Generating
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                View Documentation
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Global API</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive API suite handles message generation, image creation, 
            and complete campaign orchestration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={MessageSquare}
            title="Message Generation"
            description="Create engaging WhatsApp and RCS promotional messages with AI-powered content optimization."
            buttonText="Generate Message"
            endpoint="POST /api/v1/messages/generate"
          />
          
          <FeatureCard
            icon={Image}
            title="Campaign Images"
            description="Generate stunning marketing visuals and product images tailored to your campaign needs."
            buttonText="Generate Image"
            endpoint="POST /api/v1/images/generate"
          />
          
          <FeatureCard
            icon={Zap}
            title="Full Campaigns"
            description="Build complete marketing campaigns with coordinated messages, images, and targeting."
            buttonText="Full Campaign"
            endpoint="POST /api/v1/campaigns/create"
          />
        </div>
      </section>
      
      {/* API Demo Section */}
      <section id="api" className="bg-white/50 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Simple, Powerful API
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our intuitive REST API and comprehensive documentation.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono ml-4">api.cpaas-generator.com</span>
            </div>
            
            <pre className="text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
{`curl -X POST https://api.cpaas-generator.com/v1/campaigns/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "campaign_type": "promotional",
    "target_audience": "young_professionals",
    "product_category": "technology",
    "channels": ["whatsapp", "rcs"],
    "generate_images": true,
    "customize_messages": true
  }'`}
            </pre>
            
            <div className="mt-8 flex justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
                Try Interactive Demo
                <Smartphone className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white shadow-card">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our CPaaS platform to create 
            engaging campaigns that convert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 transition-colors shadow-soft">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
