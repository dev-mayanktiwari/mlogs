const formatDate = (date: Date | string): string => {
  // If date is a string, convert it to a Date object
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Ensure the date is valid
  if (isNaN(dateObj.getTime())) {
    return "Invalid date";
  }

  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1; // Months are 0-based
  const year = dateObj.getUTCFullYear();

  // Convert month number to month name
  const monthNames = [
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
  const monthName = monthNames[month - 1];

  return `${day} ${monthName}, ${year}`;
};

export default formatDate;