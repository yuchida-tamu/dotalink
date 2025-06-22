# /screens/ - UI Screens

Screen-level components that represent complete application screens.

## Purpose
- Complete screen implementations with their own logic
- Screen-specific state management
- Navigation integration
- Screen-level data fetching and error handling

## Structure

### `/heroes/`
Hero-related screens:
- Hero list screen
- Hero detail screen
- Hero comparison screens
- Hero statistics screens

### `/matches/`
Match-related screens:
- Match list screen
- Match detail screen
- Match analysis screens
- Live match screens

### `/profile/`
User profile screens:
- User profile screen
- Settings screen
- Statistics screen
- Match history screen

## Usage Examples
```typescript
// Import screens
import { HeroListScreen } from '@/screens/heroes';
import { MatchDetailScreen } from '@/screens/matches';

// Use in navigation
<Stack.Screen name="HeroList" component={HeroListScreen} />
```

## Guidelines
- Each screen should be self-contained with its own data fetching
- Use hooks from `/hooks/api/` for data management
- Keep screens focused on UI logic, delegate business logic to services
- Handle loading states and errors at the screen level
- Use consistent naming: `[Feature][Purpose]Screen` (e.g., `HeroListScreen`)