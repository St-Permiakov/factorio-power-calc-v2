import clsx from "clsx";
import React from "react";

import { useCalculatorContext } from "src/modules/Calculator/Calculator.context";

import styles from "./CalculatorResult.module.css";

export const CalculatorResult = React.memo(() => {
  const { result } = useCalculatorContext();

  const items = React.useMemo(() => [
    { label: "Power required:", value: result?.powerRequired ?? 0, type: "power", unit: "kW" },
  ], [result]);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <table className={styles.table}>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className={styles.label}>{item.label}</td>
                  <td className={clsx(styles.value, item.type && styles[item.type])}><strong>{item.value}</strong></td>
                  {!!item.unit && <td>{item.unit}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});
