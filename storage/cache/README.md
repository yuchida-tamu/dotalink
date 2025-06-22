# /storage/cache/ - Cache Management

Caching utilities for API responses and application data.

## Responsibilities
- API response caching with TTL support
- Cache invalidation and refresh strategies
- Memory and disk cache management
- Cache size limits and cleanup

## File Organization
- `CacheManager.ts` - Main cache management interface
- `memoryCache.ts` - In-memory cache implementation
- `diskCache.ts` - Persistent disk cache
- `strategies.ts` - Cache invalidation strategies
- `index.ts` - Cache exports