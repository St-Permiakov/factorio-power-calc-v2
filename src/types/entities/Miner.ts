/**
 * Miner
 * @description A game entity that extracts fuel from the ground. Can be represented by a drill, a pump, etc.
 */
import { BaseEntity } from "./BaseEntity";

export interface Miner extends BaseEntity {
  // units per second
  speed: number;
  // kW
  powerConsumption: number;
}
