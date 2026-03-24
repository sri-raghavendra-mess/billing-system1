// Date/time helpers anchored to IST to prevent UTC drift around midnight.
const IST = 'Asia/Kolkata';

// Internal storage key stays ISO (YYYY-MM-DD) for querying.
export const todayKey = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: IST, year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(new Date());

// UI-friendly DD/MM/YYYY formatter (accepts YYYY-MM-DD or Date)
export const formatDisplayDate = (d) => {
  if (!d) return '';
  const dateObj = d instanceof Date ? d : new Date(d);
  if (isNaN(dateObj)) return d;
  return new Intl.DateTimeFormat('en-GB', { timeZone: IST }).format(dateObj); // dd/mm/yyyy
};

export const nowTime = () => new Date().toLocaleTimeString('en-IN', { timeZone: IST });
export const nowDateTime = () => new Date().toLocaleString('en-IN', { timeZone: IST });
