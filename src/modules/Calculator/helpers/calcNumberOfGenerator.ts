import { PowerGenerator } from "src/types";

type TProps = {
  // kW
  requiredPowerOutput: number;
  powerGenerator: PowerGenerator;
}

export const calcNumberOfGenerator = ({ powerGenerator, requiredPowerOutput }: TProps) => {
  return Math.ceil(requiredPowerOutput / powerGenerator.output );
}
