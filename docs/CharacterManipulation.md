# Character Manipulation Guide

## Adding New Characters

To add a new character to the game, follow these steps:

1. Create a new character configuration in `src/data/characters.ts`:
```typescript
{
  id: 'unique-character-id',
  name: 'Character Name',
  sprite: '/assets/characters/sprite-name.png',
  abilities: [
    {
      id: 'ability-id',
      name: 'Ability Name',
      description: 'Ability Description',
      cooldown: 5000, // milliseconds
      effect: () => void
    }
  ],
  stats: {
    speed: 5,
    jumpHeight: 15,
    health: 100
  }
}
```

2. Add character sprite assets to `public/assets/characters/`
3. Register the character in `src/data/characters.ts`

## Modifying Existing Characters

1. Locate the character configuration in `src/data/characters.ts`
2. Update the desired properties
3. Test character balance in different game scenarios

## Character Guidelines

- Maintain 8-bit aesthetic in sprite design
- Keep character stats balanced (speed: 1-10, jumpHeight: 1-20, health: 50-150)
- Ensure unique abilities don't break game balance
- Test character performance across all maps