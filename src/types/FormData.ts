import { PowerGeneratorType } from "src/types/entities";

export enum FormFieldNames {
  POWER_REQUIRED = "powerRequired",
  POWER_GENERATOR_TYPE = "powerGeneratorType",
  POWER_GENERATOR_EFFICIENCY = "powerGeneratorEfficiency",
}

export interface IFormData {
  // kW
  [FormFieldNames.POWER_REQUIRED]: number;
  [FormFieldNames.POWER_GENERATOR_TYPE]: PowerGeneratorType;
  [FormFieldNames.POWER_GENERATOR_EFFICIENCY]: number;
}
