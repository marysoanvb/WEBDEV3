const color = 'Black';

switch(color) {
  case 'Purple':
  console.log('Color is Purple');
  break;
  case 'Gray':
    console.log('Color is Gray');
    break;
    default:
      console.log('Color is not Purple or Gray');
      break;
}

let day;

switch(new Date().getDay()) {
  case 0:
      day = 'Sunday';
      break;
  case 1:
      day = 'Monday';
      break;
  case 2: 
      day = 'Tuesday';
      break;
  case 3:
      day = 'Wednesday';
      break;
  case 4:
      day = 'Thursday';
      break;
  case 5:
      day = 'Friday';
      break;
  case 6:
      day = 'Saturday';
      break;
}
console.log(`Today is ${day}`);