import React from 'react';

import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

import styles from './Layout.module.css';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
