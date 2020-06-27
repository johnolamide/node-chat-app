var moment = require('moment');

// Jan 1st 1970 00:00:00 am
//
// var date = new Date();
// console.log(date.getMonth());

// creates a moment object that represents a current
// point in time
// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
