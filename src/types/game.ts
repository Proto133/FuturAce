export interface Character {
  id: string;
  name: string;
  sprite: string;
  abilities: Ability[];
  stats: CharacterStats;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  cooldown: number;
  effect: () => void;
}

export interface CharacterStats {
  speed: number;
  jumpHeight: number;
  health: number;
}

export interface PowerUp {
  id: string;
  name: string;
  duration: number;
  effect: () => void;
  sprite: string;
}

export interface GameState {
  score: number;
  distance: number;
  isGameOver: boolean;
  isPaused: boolean;
  currentSpeed: number;
  powerUps: PowerUp[];
}

export interface Obstacle {
  id: string;
  type: 'barrier' | 'enemy' | 'laser' | 'wall';
  position: Position;
  size: Size;
}

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}