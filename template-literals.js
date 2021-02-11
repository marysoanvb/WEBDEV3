const name = 'Pepperoni';
const age = 23;
const job = 'Web Developer';
const city = 'Cabanatuan City'
let html;

// Without template string (es5)

// html = '<ul><li>Name: ' +
//        name +
//        '</li><li>Age: ' +
//        age +
//        '</li><li>Job: ' +
//        job +
//        '</li><li>City: ' +
//       city +
//     ' </li> </ul>';


// With Templatestrings (es6)
// function declaration
function purple() {
    return 'Purple Black';
}




// Ternary operator
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${100 + 100 }</li>
        <li>${purple()}</li>
        <li>${age > 25 ? 'Over 25' : 'Under 25'}</li>
    </ul>
   
    `;

    document.body.innerHTML = html;

    if(age > 25) {
        'Over 25'
        } else {
            'Under 25'
        }