import { Miner } from "src/types";

type TProps = {
  miner: Miner;
  speedMod: number;
};

export const calcMinerSpeed = ({ miner: { speed }, speedMod }: TProps) => {
  return speed + speed * speedMod;
};
