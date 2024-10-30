import type { Character } from '../types/game';

export const characters: Character[] = [
  {
    id: 'cyber-runner',
    name: 'Cyber Runner',
    sprite: '/assets/characters/cyber-runner.png',
    abilities: [
      {
        id: 'double-jump',
        name: 'Double Jump',
        description: 'Perform a second jump while in the air',
        cooldown: 3000,
        effect: () => {
          // Double jump logic implemented in character controller
        }
      }
    ],
    stats: {
      speed: 5,
      jumpHeight: 15,
      health: 100
    }
  },
  {
    id: 'pixel-ninja',
    name: 'Pixel Ninja',
    sprite: '/assets/characters/pixel-ninja.png',
    abilities: [
      {
        id: 'dash',
        name: 'Dash',
        description: 'Quick forward dash through obstacles',
        cooldown: 5000,
        effect: () => {
          // Dash logic implemented in character controller
        }
      }
    ],
    stats: {
      speed: 6,
      jumpHeight: 12,
      health: 80
    }
  }
];