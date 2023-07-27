import React from "react";
import { useCalculatorContext } from "src/modules/Calculator/Calculator.context";
import { getFormData } from "src/modules/Calculator/components/CalculatorForm/CalculatorForm.helpers";
import { CalculatorFormItem } from "src/modules/Calculator/components/CalculatorFormItem";
import { FormFieldNames } from "src/types";

const formItems = [
  { id: FormFieldNames.POWER_REQUIRED, name: FormFieldNames.POWER_REQUIRED, label: "Power required", unitLabel: "kW", initialValue: 0 },
]

export const CalculatorForm = React.memo(() => {
  const { calculate } = useCalculatorContext();

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = getFormData(e.currentTarget);

    calculate(formData);
  }, [calculate]);

  React.useEffect(() => {
    const handleChange = () => {
      if (!formRef.current) return;
      const formData = getFormData(formRef.current);
      calculate(formData);
    };

    if (!formRef.current) return;
    formRef.current.addEventListener("change", handleChange);

    return () => {
      formRef.current?.removeEventListener("change", handleChange);
    }
  }, [calculate]);

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        {formItems.map((formItem) => (
          <CalculatorFormItem key={formItem.id} {...formItem} />
        ))}
      </form>
    </div>
  );
});
