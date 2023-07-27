import { calcMinerSpeed } from "src/modules/Calculator/helpers/calcMinerSpeed";
import { convertMJperSecondToKW } from "src/modules/Calculator/helpers/convertMJperSecondToKW";
import { Fuel, Miner } from "src/types";

type TProps = {
  miner: Miner;
  fuel: Fuel;
  speedMod: number;
};

export const calcMinerPowerOutput = (props: TProps) => {
  const { miner, fuel, speedMod } = props;
  const minerSpeed = calcMinerSpeed({ miner, speedMod });
  return convertMJperSecondToKW(minerSpeed * fuel.value);
};
