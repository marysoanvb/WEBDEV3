let val;

const today = new Date();
let birthday = new Date('08-07-2000 9:00:00');
birthday = new Date('August 7 2000');
birthday = new Date('2/7/05');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getMonth();
val = today.getTime();

birthday.setMonth(9);
birthday.setDate(30);
birthday.setFullYear(2013);
birthday.setHours(7);
birthday.setMinutes(00);
birthday.setSeconds(10);

console.log(birthday);