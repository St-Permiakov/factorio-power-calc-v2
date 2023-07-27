import { IFormData } from "src/types/FormData";
import { Nullable } from "src/types/utils";

interface ICalculatorResult {
  // kW
  powerRequired: Nullable<number>;
  // qt
  buildings: Nullable<Partial<Record<"minerQt" | "accumulatorQt" | "powerGeneratorQt", number>>>;
}

export interface ICalculatorContext {
  result: Nullable<Partial<ICalculatorResult>>;
  calculate: (formData: IFormData) => void;
}
