import React from "react";

import styles from "./Footer.module.css";

export const Footer = React.memo(() => {
  return (
    <footer className={styles.root}>
      <span className={styles.copyright}>2023 © St.Permiakov (aka Stranger)</span>
    </footer>
  );
});
