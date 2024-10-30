import type { Obstacle, Position } from '../types/game';

interface GameMap {
  id: string;
  name: string;
  theme: string;
  background: string;
  obstacles: Obstacle[];
  powerUpSpawnPoints: Position[];
  difficulty: number;
}

export const maps: GameMap[] = [
  {
    id: 'neo-tokyo',
    name: 'Neo Tokyo',
    theme: 'future-city',
    background: '/assets/maps/neo-tokyo.png',
    obstacles: [
      {
        id: 'barrier-1',
        type: 'barrier',
        position: { x: 300, y: 200 },
        size: { width: 50, height: 100 }
      },
      {
        id: 'laser-1',
        type: 'laser',
        position: { x: 600, y: 150 },
        size: { width: 20, height: 150 }
      }
    ],
    powerUpSpawnPoints: [
      { x: 400, y: 150 },
      { x: 800, y: 200 }
    ],
    difficulty: 1
  }
];