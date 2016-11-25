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
  compareDatesWithoutTime: function(a, b) {
    let aWithoutTime = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    let bWithoutTime = new Date(b.getFullYear(), b.getMonth(), b.getDate());

    if (aWithoutTime.getTime() > bWithoutTime.getTime()) {
      return -1;
    } else if (bWithoutTime.getTime() > aWithoutTime.getTime()) {
      return 1;
    } else {
      return 0;
    }
  }
};
