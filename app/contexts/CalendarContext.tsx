"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { ContextValue, Event, EventsState } from "../types";

const defaultValue: ContextValue = {
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  events: {},
  prevMonth: () => {},
  nextMonth: () => {},
  navigateToToday: () => {},
  pushEventToDate: () => {},
  deleteEvent: () => {},
  editEvent: () => {},
};

const CalendarContext = createContext(defaultValue);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [currentYear, setCurrentYear] = useState(defaultValue.currentYear);
  const [currentMonth, setCurrentMonth] = useState(defaultValue.currentMonth);
  const [events, setEvents] = useState<EventsState>({});

  // dictates switching to previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  // dictates switching to next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Takes user to the current month directly
  const navigateToToday = () => {
    setCurrentMonth(defaultValue.currentMonth);
    setCurrentYear(defaultValue.currentYear);
  };

  // Saves an event for a date
  const pushEventToDate = (event: Event, date: string) => {
    if (events?.[date]) {
      setEvents({ ...events, [date]: [...events[date], event] });
    } else {
      setEvents({ ...events, [date]: [event] });
    }
  };

  // Edit an event
  const editEvent = (oldTitle: string, updatedEvent: Event, date: string) => {
    const eventsByDate = events?.[date];
    const eventToBeUpdatedIndex = eventsByDate.findIndex(
      (item: Event) => item.title === oldTitle
    );
    eventsByDate.splice(eventToBeUpdatedIndex, 1, updatedEvent);
    setEvents({ ...events, [date]: eventsByDate });
  };

  // Deletes an event
  const deleteEvent = (event: Event, date: string) => {
    const eventsByDate = events?.[date];
    const eventToBeDeletedIndex = eventsByDate.findIndex(
      (item: Event) => item.title === event.title
    );
    // copy existing events for the date
    eventsByDate.splice(eventToBeDeletedIndex, 1);
    setEvents({ ...events, [date]: eventsByDate });
  };

  return (
    <CalendarContext.Provider
      value={{
        currentYear,
        currentMonth,
        prevMonth,
        nextMonth,
        navigateToToday,
        events,
        pushEventToDate,
        deleteEvent,
        editEvent,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalender = () => useContext(CalendarContext);
