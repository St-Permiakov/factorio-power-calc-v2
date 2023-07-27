/**
 * Generator
 * @description A game entity that generates power through fuel consumption or sun exposure.
 */
import { BaseEntity } from "./BaseEntity";

export interface PowerGenerator extends BaseEntity {
  // kW
  output: number;
  // %
  efficiency?: number;
  type: PowerGeneratorType;
}

export enum PowerGeneratorType {
  FUEL = "fuel",
  SOLAR = "solar"
}
