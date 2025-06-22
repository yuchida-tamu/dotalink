# /api/ - External Service Clients

This folder contains raw API clients and HTTP utilities for external service communication.

## Purpose
- Manage HTTP clients and configurations
- Handle API request/response logic
- Provide interceptors for authentication, logging, and error handling
- Abstract external service communication from business logic

## Structure

### `/clients/`
Contains HTTP client implementations and configurations:
- Base HTTP client setup
- Service-specific client configurations
- Request/response interceptors
- Authentication handlers

### `/config/`
API configuration files:
- Environment-specific configurations  
- API endpoints and base URLs
- Rate limiting configurations
- Timeout and retry policies

### `/interceptors/`
Request/response interceptors:
- Authentication interceptors
- Error handling interceptors
- Logging interceptors
- Request/response transformation

## Usage Examples
```typescript
// Import HTTP client
import { httpClient } from '@/api/clients';

// Use configured client
const response = await httpClient.get('/endpoint');
```

## Guidelines
- Keep API clients focused on HTTP communication only
- Business logic should be in `/services/` layer
- Use TypeScript interfaces for all API contracts
- Handle errors at the interceptor level when possible