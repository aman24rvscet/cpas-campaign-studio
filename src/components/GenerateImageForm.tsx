import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { apiService } from "@/services/api";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Download } from "lucide-react";

interface GenerateImageFormProps {
  onClose: () => void;
}

const GenerateImageForm = ({ onClose }: GenerateImageFormProps) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Missing message",
        description: "Please enter a promotional message",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const response = await apiService.generateImage(message);
    
    if (response.success && response.data) {
      setImageUrl(response.data);
      toast({
        title: "Image generated!",
        description: "Your campaign image has been created.",
      });
    } else {
      toast({
        title: "Generation failed",
        description: response.error || "Failed to generate image",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'campaign-image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Generate Image</h2>
            <Button variant="ghost" onClick={onClose}>✕</Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Promotional Message *</Label>
              <Textarea
                id="message"
                placeholder="🔥Fashion9 MEGA SALE!🔥 Get 50% OFF EVERYTHING! 🤩 Your wardrobe upgrade awaits..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32"
              />
              <p className="text-sm text-muted-foreground">
                Enter the promotional message you want to create an image for
              </p>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating Image...
                </>
              ) : (
                "Generate Image"
              )}
            </Button>
          </form>

          {imageUrl && (
            <div className="space-y-3">
              <Label>Generated Image:</Label>
              <div className="relative bg-muted rounded-lg p-4">
                <img 
                  src={imageUrl} 
                  alt="Generated campaign image" 
                  className="w-full rounded-lg shadow-soft"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={downloadImage}
                  className="absolute top-6 right-6"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default GenerateImageForm;