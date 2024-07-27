"use client";

import { useCalender } from "@/app/contexts/CalendarContext";
import styles from "../Header/Header.module.css";

const Footer = () => {
  const { navigateToToday } = useCalender();

  return (
    <div className={`${styles.strip} ${styles.footer}`}>
      <button onClick={navigateToToday} className={styles.todayBtn}>
        Today
      </button>
    </div>
  );
};

export default Footer;
