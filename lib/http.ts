import Constants from 'expo-constants';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export class HttpError extends Error {
  status?: number;
  code?: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
  }
}

const getApiConfig = () => {
  const baseUrl = Constants.expoConfig?.extra?.EXPO_PUBLIC_STATZ_API_URL || process.env.EXPO_PUBLIC_STATZ_API_URL;
  const token = Constants.expoConfig?.extra?.EXPO_PUBLIC_STATZ_API_TOKEN || process.env.EXPO_PUBLIC_STATZ_API_TOKEN;
  
  if (!baseUrl) {
    throw new Error('API base URL is not configured');
  }

  return { baseUrl, token };
};

export const createRequest = (endpoint: string, options: RequestInit = {}): [string, RequestInit] => {
  const { baseUrl, token } = getApiConfig();
  const url = `${baseUrl.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return [url, { ...options, headers }];
};

export const httpGet = async <T>(endpoint: string): Promise<T> => {
  try {
    const [url, options] = createRequest(endpoint, { method: 'GET' });
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new HttpError(
        `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        response.status.toString()
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    
    throw new HttpError(
      error instanceof Error ? error.message : 'Unknown error occurred',
      undefined,
      'NETWORK_ERROR'
    );
  }
};

export const httpPost = async <T>(endpoint: string, body?: any): Promise<T> => {
  try {
    const [url, options] = createRequest(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    });
    
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new HttpError(
        `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        response.status.toString()
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    
    throw new HttpError(
      error instanceof Error ? error.message : 'Unknown error occurred',
      undefined,
      'NETWORK_ERROR'
    );
  }
};