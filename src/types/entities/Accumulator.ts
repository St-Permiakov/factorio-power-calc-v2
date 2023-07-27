/**
 * Accumulator
 * @description A game entity that can store and release power.
 */
import { BaseEntity } from "./BaseEntity";

export interface Accumulator extends BaseEntity {
  // MJ
  capacity: number;
  // kW
  input?: number;
  // kW
  output?: number;
}
