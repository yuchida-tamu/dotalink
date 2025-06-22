# /storage/ - Local Persistence Abstractions

Local storage utilities and abstractions for data persistence.

## Purpose
- Abstract local storage implementations (AsyncStorage, SecureStore, etc.)
- Provide caching mechanisms for API responses
- Handle offline data synchronization
- Manage secure storage for sensitive data

## Structure

### `/cache/`
Cache management utilities:
- API response caching
- Cache invalidation strategies
- Cache size management
- TTL (Time To Live) implementations

### `/secure/`
Secure storage abstractions:
- Authentication tokens
- User credentials
- Sensitive app data
- Biometric authentication data

### `/utils/`
Storage utility functions:
- Storage adapters
- Data serialization/deserialization
- Migration utilities
- Storage cleanup functions

## Usage Examples
```typescript
// Import storage utilities
import { CacheManager } from '@/storage/cache';
import { SecureStorage } from '@/storage/secure';

// Cache API responses
await CacheManager.set('heroes', heroesData, { ttl: 3600 });

// Store sensitive data
await SecureStorage.setItem('auth_token', token);
```

## Guidelines
- Always use appropriate storage type for data sensitivity
- Implement proper error handling for storage operations
- Consider offline scenarios in cache strategies
- Use TypeScript for all storage interfaces
- Implement storage size limits and cleanup strategies