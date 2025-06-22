# /api/interceptors/ - Request/Response Interceptors

Interceptors for handling cross-cutting concerns in API communication.

## Responsibilities
- Authentication token injection
- Error handling and retry logic
- Request/response logging
- Data transformation
- Performance monitoring

## File Organization
- `auth.ts` - Authentication interceptors
- `errorHandling.ts` - Error handling and retry logic
- `logging.ts` - Request/response logging
- `index.ts` - Interceptor exports