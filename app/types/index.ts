export interface DateItemProps {
  date: number;
  month: string;
  year: number;
}

export interface Event {
  title: string;
  description?: string;
  date: string;
}

interface CommonModalProps {
  heading: string;
  onClose: () => void;
}

export interface EventModalProps extends CommonModalProps {
  date: string;
  isEditEvent?: boolean;
  eventProp?: Event;
}

export interface ModalProps extends CommonModalProps {
  children: React.ReactNode;
}

export interface EventsState {
  [key: string]: Array<Event>;
}

export interface ContextValue {
  currentYear: number;
  currentMonth: number;
  prevMonth: () => void;
  nextMonth: () => void;
  navigateToToday: () => void;
  events: EventsState;
  pushEventToDate: (event: Event, date: string) => void;
  deleteEvent: (event: Event, date: string) => void;
  editEvent: (oldTitle: string, event: Event, date: string) => void;
}
