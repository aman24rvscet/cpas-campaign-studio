const API_BASE_URL = 'http://localhost:8000';

export interface MessageGenerationRequest {
  context: string;
  brand_name: string;
  max_length: number;
  add_emojis: boolean;
}

export interface CampaignGenerationRequest {
  context: string;
  brand_name: string;
  max_length: number;
  add_emojis: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('API request failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  async generateMessage(payload: MessageGenerationRequest): Promise<ApiResponse<string>> {
    return this.request<string>('/generate/messages', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async generateImage(message: string): Promise<ApiResponse<string>> {
    return this.request<string>('/generate/image', {
      method: 'POST',
      body: JSON.stringify(message),
    });
  }

  async generateCampaign(payload: CampaignGenerationRequest): Promise<ApiResponse<any>> {
    return this.request('/generate/campaign', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}

export const apiService = new ApiService();