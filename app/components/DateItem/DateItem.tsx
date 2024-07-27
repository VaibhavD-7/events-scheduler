import React, { FC, useState } from "react";
import { weekDays } from "../../lib/data";
import styles from "./DateItem.module.css";
import { useCalender } from "../../contexts/CalendarContext";
import { DateItemProps, Event } from "../../types";
import dynamic from "next/dynamic";
import { getWeekDay, isGivenDateToday, isPastDate } from "../../lib/utils";

// dynamic import modal when it's required
const EventModal = dynamic(() => import("../EventModal/EventModal"));

const DateItem: FC<DateItemProps> = ({ date, month, year }) => {
  const fullDate = `${date} ${month} ${year}`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Event>({
    title: "",
    description: "",
    date: fullDate,
  });

  const dayToday = getWeekDay(fullDate);
  const { events } = useCalender();
  const todayEvents = events?.[fullDate];

  const isToday = isGivenDateToday(fullDate);

  if (isPastDate(fullDate)) {
    return (
      <div
        className={`${styles.dateItem} ${styles.disabledItem}`}
        onClick={() =>
          alert("Cannot travel back in time. Please plan the future!!")
        }
      >
        <span className={styles.dayText}>{dayToday}</span>

        <h2 className={styles.dateText}>{date}</h2>
      </div>
    );
  }

  return (
    <>
      <div
        className={`${styles.dateItem} ${styles.activeItem}`}
        onClick={() => setIsModalOpen(true)}
      >
        <span className={styles.dayText}>{dayToday}</span>

        <h2
          className={`${styles.dateText} ${isToday ? styles.dateOverlay : ""}`}
        >
          {date}
        </h2>

        {todayEvents &&
          todayEvents.map((event: Event) => (
            <div
              className={styles.eventItem}
              key={event.title}
              onClick={(e) => {
                e.stopPropagation();
                setModalData(event);
                setIsModalOpen(true);
              }}
            >
              {event.title}
            </div>
          ))}
      </div>

      {isModalOpen && (
        <EventModal
          heading="Create Event"
          onClose={() => {
            setIsModalOpen(false);
            setModalData({
              title: "",
              description: "",
              date: `${date} ${month} ${year}`,
            });
          }}
          date={`${date} ${month} ${year}`}
          eventProp={modalData}
          isEditEvent={!!modalData.title}
        />
      )}
    </>
  );
};

export default DateItem;
