/**
 * Game
 * @description Basic game settings: day/night cycle, etc.
 */

export interface Game {
  // seconds
  dayLength: number;
  // seconds
  nightLength: number;
  // seconds
  dawnLength: number;
}
