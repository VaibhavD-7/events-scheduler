"use client";
import DateItem from "./components/DateItem/DateItem";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useCalender } from "./contexts/CalendarContext";
import { months } from "./lib/data";
import styles from "./page.module.css";

export default function Home() {
  const { currentYear, currentMonth } = useCalender();

  const totalDaysInCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  // Generate an empty array to render days in a month
  const mockArr = new Array(totalDaysInCurrentMonth).fill("");

  return (
    <main>
      <Header />
      <div className={styles.dateContainer}>
        {mockArr.map((_, idx) => (
          <DateItem
            key={idx}
            date={idx + 1}
            month={months[currentMonth]}
            year={currentYear}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
