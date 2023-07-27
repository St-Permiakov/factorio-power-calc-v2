import React from "react";

import { CalculatorFormItemProps } from "./CalculatorFormItem.types";

import styles from "./CalculatorFormItem.module.css";

export const CalculatorFormItem = React.memo<CalculatorFormItemProps>((props) => {
  const { id, name, label, unitLabel, initialValue } = props;

  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="number" defaultValue={initialValue} />
      {!!unitLabel && <span>{unitLabel}</span>}
    </div>
  );
});
