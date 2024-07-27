"use client";
import { months } from "../../lib/data";
import styles from "./Header.module.css";
import { useCalender } from "../../contexts/CalendarContext";

const Header = () => {
  const { currentMonth, currentYear, prevMonth, nextMonth } = useCalender();

  return (
    <div className={`${styles.strip} ${styles.header}`}>
      <button className={styles.arrowBtn} onClick={prevMonth}>
        {"<"}
      </button>
      <span className={styles.monthText}>
        {months[currentMonth].substring(0, 3)} {currentYear}
      </span>
      <button className={styles.arrowBtn} onClick={nextMonth}>
        {">"}
      </button>
    </div>
  );
};

export default Header;
