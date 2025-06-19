
const moment = require('moment');

const date1 = moment('2025-06-10');
const date2 = moment('2025-06-19');


const differenceInDays = date2.diff(date1, 'days');

console.log(`სხვაობა არის ${differenceInDays} დღე`);
