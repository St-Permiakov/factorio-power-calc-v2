import { MINIMAL_POWER_CONSUMPTION_PERCENT } from "src/const";
import { Miner } from "src/types";

type TProps = {
  miner: Miner;
  powerMod: number;
};

export const calcMinerPowerReq = ({ miner: { powerConsumption }, powerMod }: TProps) => {
  const totalPowerConsumption = powerConsumption + powerConsumption * powerMod;
  const minimalPowerConsumption = powerConsumption * MINIMAL_POWER_CONSUMPTION_PERCENT;
  return totalPowerConsumption >= minimalPowerConsumption ? totalPowerConsumption : minimalPowerConsumption;
};
