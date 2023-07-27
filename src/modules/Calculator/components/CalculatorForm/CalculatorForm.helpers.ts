import { FormFieldNames, IFormData, PowerGeneratorType } from "src/types";

export const getFormData = (form: HTMLFormElement): IFormData => {
  const formData = new FormData(form);

  console.log(Array.from(formData.entries()));

  return {
    powerRequired: Number(formData.get(FormFieldNames.POWER_REQUIRED) ?? 0),
    powerGeneratorType: formData.get(FormFieldNames.POWER_GENERATOR_TYPE) as PowerGeneratorType,
    powerGeneratorEfficiency: Number(formData.get(FormFieldNames.POWER_GENERATOR_EFFICIENCY) ?? 100),
  };
}
