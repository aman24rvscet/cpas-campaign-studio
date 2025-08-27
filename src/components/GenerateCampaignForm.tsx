import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { apiService, CampaignGenerationRequest } from "@/services/api";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Copy, CheckCircle } from "lucide-react";

interface GenerateCampaignFormProps {
  onClose: () => void;
}

const GenerateCampaignForm = ({ onClose }: GenerateCampaignFormProps) => {
  const [formData, setFormData] = useState<CampaignGenerationRequest>({
    context: "",
    brand_name: "",
    max_length: 160,
    add_emojis: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.context.trim() || !formData.brand_name.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in context and brand name",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const response = await apiService.generateCampaign(formData);
    
    if (response.success && response.data) {
      setResult(response.data);
      toast({
        title: "Campaign generated!",
        description: "Your complete campaign has been created.",
      });
    } else {
      toast({
        title: "Generation failed",
        description: response.error || "Failed to generate campaign",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Generate Full Campaign</h2>
            <Button variant="ghost" onClick={onClose}>✕</Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="context">Campaign Context *</Label>
              <Textarea
                id="context"
                placeholder="e.g., Sale 50% for clothing brand!"
                value={formData.context}
                onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand_name">Brand Name *</Label>
              <Input
                id="brand_name"
                placeholder="e.g., Fashion9"
                value={formData.brand_name}
                onChange={(e) => setFormData({ ...formData, brand_name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="max_length">Max Length</Label>
              <Input
                id="max_length"
                type="number"
                min="50"
                max="300"
                value={formData.max_length}
                onChange={(e) => setFormData({ ...formData, max_length: parseInt(e.target.value) || 160 })}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="add_emojis"
                checked={formData.add_emojis}
                onCheckedChange={(checked) => setFormData({ ...formData, add_emojis: checked })}
              />
              <Label htmlFor="add_emojis">Add Emojis</Label>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating Campaign...
                </>
              ) : (
                "Generate Full Campaign"
              )}
            </Button>
          </form>

          {result && (
            <div className="space-y-4">
              <Label>Generated Campaign:</Label>
              <div className="space-y-3">
                {typeof result === 'string' ? (
                  <div className="relative">
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
                      {result}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(result)}
                      className="absolute top-2 right-2"
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ) : (
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-auto whitespace-pre-wrap">
                      {JSON.stringify(result, null, 2)}
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(JSON.stringify(result, null, 2))}
                      className="mt-2"
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      Copy Campaign Data
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default GenerateCampaignForm;