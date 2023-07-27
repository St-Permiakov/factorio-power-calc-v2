import { Accumulator, Fuel, Game, PowerGenerator, Miner } from "src/types";

export interface Preset {
  id: string;
  name: string;
  iconUrl?: string;
  description?: string;
  game: Game;
  entities: {
    accumulators: Accumulator[];
    fuels: Fuel[];
    generators: PowerGenerator[];
    miners: Miner[];
  }
}
