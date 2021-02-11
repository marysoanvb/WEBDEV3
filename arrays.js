// Create some arrays
const numbers = [20, 10, 50, 80, 70, 30, 40, 90, 60];
const numbers2 = new Array(5, 10, 15, 25, 35, 45, 55, 65, 75, 85, 95);
const fruit = ['Raspberry', 'Blackberry', 'Blueberry', 'Strawberry'];
const mixed = [76, null, false, 'Hi', undefined, {a: 1, b: 2}];


let value;

// Get array length

// value = numbers.length;
// Check if is array
// value = Array.isArray(numbers);
// Get single value
// value = numbers[3];
// value = numbers[0];


// Insert into array
// numbers[2] = 31;
// Find index of value
// value = numbers.indexOf(60);


// Mutating arrays
// Add on to end
// numbers.push(100);
// Add on to front
// numbers.unshift(0);
// Take off from end
// numbers.pop();
// Take off from front
// numbers.shift();

// Splice value
// numbers.splice(0, 5);

// Reverse
// numbers.reverse();

// Concatenate arrays
value = numbers.concat(numbers2);

// Sorting Array
value = fruit.sort();
value = numbers.sort();

// Use the compare function
value = numbers.sort(function(x, y) {
    return x - y;
});
// Reverse sort
value = numbers.sort(function(x, y) {
    return y - x;
});

// Find
function over50(num) {
    return num > 50;
};

value = numbers.find(over50);
console.log(value);