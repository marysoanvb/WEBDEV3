// For loop
for(let i = 0; i < 10; i++) {
  if(i === 2) {
    console.log('2 is my favorite number')
    continue;
  }
  if (i === 5) {
    console.log('Stop the loop');
    break;
  }

    console.log(`Number ${i}`);
}

// While loop
let i = 0;
  
while(i< 10) {
  console.log(`Number ${i}`)
  i++;
}

// do while
do {
  console.log(`Number ${i}`);
  i++;
}

while(i < 10);

// Loop through array
const cars = ['Honda', 'Toyota', 'Nissan', 'GMC'];

for(let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Foreach
cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(`${array}`);
})

// Map
const users = [{id: 1, name: 'Pepperoni'}, {id: 2, name: 'Hawaiian'}, 
{id: 3, name: 'Five Cheese'}, {id: 4, name: 'All Meat'}];

const ids = users.map(function(user) {
  return user.name;
});
console.log(ids);

// For in loop
const user = {
  firstName: 'Parmessan',
  lastName: 'Cheese',
  age: '25'
};
for(let x in user) {
  console.log(`${x} : ${user[x]}`);
}