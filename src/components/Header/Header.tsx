import React from "react";

import styles from "./Header.module.css"

export const Header = React.memo(() => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Factorio Power Calculator</h1>
    </header>
  );
});
