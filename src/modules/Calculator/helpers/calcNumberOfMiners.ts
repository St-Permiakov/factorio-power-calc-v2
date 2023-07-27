import { calcMinerPowerNetOutput } from "src/modules/Calculator/helpers/calcMinerPowerNetOutput";
import { Fuel, Miner, Modifiers } from "src/types";

type TProps = {
  // kW
  requiredPowerOutput: number;
  miner: Miner;
  fuel: Fuel;
  mods: Modifiers;
}

export const calcNumberOfMiners = ({ miner, fuel, mods, requiredPowerOutput }: TProps) => {
  const minerPowerNetOutput = calcMinerPowerNetOutput({ miner, fuel, mods });
  return Math.ceil(requiredPowerOutput / minerPowerNetOutput);
}
