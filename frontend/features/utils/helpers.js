export default {
  /**
   * Helper function generating unique id
   * @returns { number } unique identificator
   **/
  generateId: (function () {
    let currentId = 0;
    return () => currentId++;
  })(),

  /**
   * Helper function comparing two dates without time
   * returns 1 if b is greater than a
   * returns -1 if a is greater than b
   * returns 0 if a and b are equal to each other
   *
   * @argument { Date } a - date object
   * @argument { Date } b - date object
   * @returns { number } result
   **/
  compareDatesWithoutTime(a, b) {
    const aWithoutTime = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const bWithoutTime = new Date(b.getFullYear(), b.getMonth(), b.getDate());

    if (aWithoutTime.getTime() > bWithoutTime.getTime()) {
      return -1;
    } else if (bWithoutTime.getTime() > aWithoutTime.getTime()) {
      return 1;
    }
    return 0;
  },

  /**
   * Helper function formatting the date
   * @argument { Date } date to be formatted
   **/
  formatDate(date) {
    let hours = date.getHours();
    const isPM = !!Math.floor(hours / 12);
    const period = isPM ? 'PM' : 'AM';
    let minutes = date.getMinutes();
    hours = isPM ? hours % 12 : hours;
    minutes = minutes >= 10 ? minutes : `0${minutes}`;

    // Cases for midnight and midday
    hours = hours === 0 ? 12 : hours;

    return `${hours}:${minutes} ${period}`;
  },
};
