// Window method/Objects/Properties

// Alert
// alert('Purple Black');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('How are you?')) {
//     console.log('GOOD');
//   } else {
//     console.log('NOT GOOD');
//   }

let value;

// Outer Height and Width
value = window.outerHeight;
value = window.outerWidth;

//Inner Height and Width
value = window.innerHeight;
value = window.innerWidth;

// Scroll points
value = window.scrollY;
value = window.scrollX;

//Location Object
value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

// Redirect
// window.location.href = 'http://www.google.com/';
// Reload
// window.location.reload();

// Navigation object
value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.userAgent;
value = window.navigator.platform;
value = window.navigator.vendor;
value = window.navigator.language;

console.log(value);