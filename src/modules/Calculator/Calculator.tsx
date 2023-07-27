import React from "react";

import { CalculatorForm } from "./components/CalculatorForm";
import { CalculatorResult } from "./components/CalculatorResult";

import { CalculatorProvider } from "./Calculator.context";

import styles from "./Calculator.module.css";

export const Calculator = () => {
  return (
    <CalculatorProvider>
      <div className={styles.root}>
        <div className={styles.result}>
          <CalculatorResult />
        </div>
        <div className={styles.form}>
          <CalculatorForm />
        </div>
      </div>
    </CalculatorProvider>
  )
}
