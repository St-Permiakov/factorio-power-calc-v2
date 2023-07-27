import { calcMinerPowerOutput } from "src/modules/Calculator/helpers/calcMinerPowerOutput";
import { calcMinerPowerReq } from "src/modules/Calculator/helpers/calcMinerPowerReq";
import { Fuel, Miner, Modifiers } from "src/types";

type TProps = {
  miner: Miner;
  fuel: Fuel;
  mods: Modifiers;
};

export const calcMinerPowerNetOutput = (props: TProps) => {
  const {
    miner,
    fuel,
    mods: { speedMod, powerMod },
  } = props;
  const minerPowerReq = calcMinerPowerReq({ miner, powerMod });
  const minerPowerOutput = calcMinerPowerOutput({ miner, fuel, speedMod });
  return minerPowerOutput - minerPowerReq;
};
