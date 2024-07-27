import { weekDays } from "./data";

// Checks if given date has already passed
export const isPastDate = (date: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return new Date(date) < today;
};

// Returns the week day for a given date
export const getWeekDay = (date: string) => {
  return weekDays[new Date(date).getDay()];
};

// Check if given date is of today
export const isGivenDateToday = (date: string) => {
  const inputDate = new Date(date).setHours(0, 0, 0, 0);
  const currentDate = new Date().setHours(0, 0, 0, 0);

  return inputDate === currentDate;
};
