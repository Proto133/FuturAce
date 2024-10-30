import type { PowerUp } from '../types/game';

export const powerUps: PowerUp[] = [
  {
    id: 'speed-boost',
    name: 'Speed Boost',
    duration: 5000,
    effect: () => {
      // Speed boost logic implemented in game controller
    },
    sprite: '/assets/power-ups/speed-boost.png'
  },
  {
    id: 'invincibility',
    name: 'Invincibility',
    duration: 3000,
    effect: () => {
      // Invincibility logic implemented in game controller
    },
    sprite: '/assets/power-ups/invincibility.png'
  }
];