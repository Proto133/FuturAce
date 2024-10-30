# Map Manipulation Guide

## Creating New Maps

1. Create a new map configuration in `src/data/maps.ts`:
```typescript
{
  id: 'map-id',
  name: 'Map Name',
  theme: 'future-city',
  background: '/assets/maps/background.png',
  obstacles: [
    {
      type: 'barrier',
      position: { x: 100, y: 200 },
      size: { width: 50, height: 50 }
    }
  ],
  powerUpSpawnPoints: [
    { x: 300, y: 150 }
  ],
  difficulty: 1
}
```

2. Add map assets to `public/assets/maps/`
3. Register the map in `src/data/maps.ts`

## Map Guidelines

- Maintain consistent difficulty progression
- Ensure adequate spacing between obstacles
- Include power-up spawn points
- Test map performance on different screen sizes
- Keep the 8-bit aesthetic consistent