# Power-Up System Guide

## Adding New Power-Ups

1. Create a new power-up configuration in `src/data/powerUps.ts`:
```typescript
{
  id: 'power-up-id',
  name: 'Power-Up Name',
  duration: 5000, // milliseconds
  effect: () => {
    // Power-up logic
  },
  sprite: '/assets/power-ups/sprite.png'
}
```

2. Add power-up sprite to `public/assets/power-ups/`
3. Register the power-up in `src/data/powerUps.ts`

## Power-Up Guidelines

- Keep durations balanced (3-15 seconds)
- Ensure effects are clearly visible
- Test power-up stacking behavior
- Maintain 8-bit visual style