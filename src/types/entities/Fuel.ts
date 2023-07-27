/**
 * Fuel
 * @description A game entity that can be extracted from the ground and burned to generate power.
 */
import { BaseEntity } from "./BaseEntity";

export interface Fuel extends BaseEntity {
  // MJ
  value: number;
}
