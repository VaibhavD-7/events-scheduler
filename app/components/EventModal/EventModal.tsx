"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useCalender } from "../../contexts/CalendarContext";
import styles from "./EventModal.module.css";
import { Event, EventModalProps } from "../../types";

const EventModal = ({
  heading,
  onClose,
  date,
  isEditEvent = false,
  eventProp = { title: "", description: "", date },
}: EventModalProps) => {
  const { pushEventToDate, deleteEvent, editEvent } = useCalender();
  const [event, setEvent] = useState<Event>(eventProp);
  const [errors, setErrors] = useState({ title: false, description: false });

  const onTitleChange = (val: string) => {
    setEvent({ ...event, title: val });
  };

  const onDescriptionChange = (val: string) => {
    if (val.length >= 200) {
      setErrors({ ...errors, description: true });
      return;
    }
    setEvent({ ...event, description: val });
  };

  const createEvent = () => {
    if (!event.title) {
      setErrors({ ...errors, title: true });
      return;
    }

    setErrors({ ...errors, title: false });
    if (isEditEvent) {
      editEvent(eventProp.title, event, date);
    } else {
      pushEventToDate(event, date);
    }
    onClose();
  };

  return (
    <Modal heading={heading} onClose={onClose}>
      <div>Create Event for {date}</div>
      <div className={styles.form}>
        <input
          type="text"
          className={`${styles.input} ${styles.titleInput}`}
          value={event.title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Event Title"
        />

        {errors.title && (
          <span className={styles.errorText}>*Title is required</span>
        )}

        <textarea
          rows={6}
          value={event.description}
          className={styles.input}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="Add some description of event"
        />

        {errors.description && (
          <span className={styles.errorText}>
            *Only 200 characters are allowed
          </span>
        )}

        {isEditEvent ? (
          <>
            <button
              className={`${styles.btn} ${styles.submit}`}
              onClick={createEvent}
            >
              Edit
            </button>
            <button
              className={`${styles.btn} ${styles.deleteBtn}`}
              onClick={() => {
                deleteEvent(eventProp, date);
                onClose();
              }}
            >
              Delete
            </button>
          </>
        ) : (
          <button
            className={`${styles.btn} ${styles.submit}`}
            onClick={createEvent}
          >
            Create
          </button>
        )}
      </div>
    </Modal>
  );
};

export default EventModal;
