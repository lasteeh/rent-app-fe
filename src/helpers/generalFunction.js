export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthNameFromNumber = (num) => {
  const monthNumber = Number(num);
  return months[monthNumber - 1];
};

export const getNextBillingDate = (startDate, monthlyBilling) => {
  const currentDate = new Date();
  const startDateObj = new Date(startDate);

  const nextMonth = currentDate.getMonth() + monthlyBilling;
  const nextYear = currentDate.getFullYear();

  if (nextMonth >= 12) {
    nextYear += nextMonth / 12;
    nextMonth %= 12;
  }

  const nextDate = new Date(nextYear, nextMonth, startDateObj.getDate());

  return `${monthNameFromNumber(
    nextDate.getMonth() + 1
  )} ${nextDate.getDate()}, ${nextDate.getFullYear()}`;
};
