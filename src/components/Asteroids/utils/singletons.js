import { SpaceShip } from '../components/SpaceShip.js';
import { AsteroidSpawnManager } from '../managers/AsteroidSpawnManager.js';
import { ScoreManager } from '../managers/ScoreManager.js';

export const SPACE_SHIP = new SpaceShip(250, 250, 13, 2);
export const ASTEROID_SPAWN_MANAGER = new AsteroidSpawnManager(SPACE_SHIP);
export const SCORE_MANAGER = new ScoreManager();
