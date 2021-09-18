/**
 * A promisified, timed delay.
 *
 * @param {Number} delay_ms - Amout of time to wait, in ms.
 * @returns {Promise} - That resolves once the timed delay has ellapsed
 */
 export const wait = delay_ms => new Promise(resolve => setTimeout(resolve, delay_ms));

 // Capitalize the first letter of a string
 export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
 
 // A basic URL validator
 export const urlValidationHandler = url => {
   if (!url.startsWith('http')) {
     throw new Error('URL must contain a valid protocol');
   } else if (!contains('.', url)) {
     throw new Error('URL must contain a valid domain');
   }
 };
 
 // A basic Email validator using regex
 // https://tylermcginnis.com/validate-email-address-javascript/
 export const emailValidationHandler = email => {
   const regexMatch = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
   if (!regexMatch) {
     throw new Error('Email format invalid');
   }
 };
 
 /**
* Takes the median of an array of objects by
* evaluating the objects accessor key.
* @param {Array} array of objects
* @param {String} accessor key on object to evaluate
*/
export const median = (array, accessor) => {
  if (!array.length > 0 || !accessor) { return false; } // bail case

  const middle = Math.floor(array.length / 2);
  const sorted = [ ...array ].sort((a, b) => a[accessor] - b[accessor]);
  const isEven = sorted.length % 2 === 0;
  // If even number of items, return average of the two middle items
  // If odd, simply return middle item
  return isEven ? ((sorted[middle - 1] + sorted[middle]) / 2)[accessor] : sorted[middle][accessor];
};
