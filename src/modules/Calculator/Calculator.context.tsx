import React from "react";
import { IFormData } from "src/types";
import { ICalculatorContext } from "./Calculator.types";

const initialState: ICalculatorContext = {
  result: null,
  calculate: () => {},
};

export const CalculatorContext = React.createContext<ICalculatorContext>(initialState);

export const CalculatorProvider = React.memo<{ children: JSX.Element }>(({ children }) => {
  const [result, setResult] = React.useState<ICalculatorContext["result"]>(null);

  const calculate = React.useCallback((formData: IFormData) => {
    const { powerRequired } = formData;
    setResult({ powerRequired });
  }, []);

  return (
    <CalculatorContext.Provider value={{ result, calculate }}>
      {children}
    </CalculatorContext.Provider>
  );
});

export const useCalculatorContext = (): ICalculatorContext => {
  return React.useContext(CalculatorContext);
};
