
/**
 * @description fn to format a date string into the format:
 * {month} {day} at {hour} {minute} {am/pm}
 *  
 */
export const formatDateString = (dateString: string) => {
    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(date);

    return formattedDate
}