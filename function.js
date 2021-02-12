// Function Declaration

function greet(firstName, lastName) {
  if(typeof firstName === 'undefined') {
    firstName = 'Pepperoni';
  }if(typeof lastName === 'undefined') {
    lastName = 'Pizza';
  }
  console.log('Hi!');
  return `Hi! ${firstName} ${lastName}`;

}
console.log(greet('Pepperoni', 'Pizza'));

// Function Expressions

const square = function(x) {
  return x * x;
}

console.log(square(1000));

//Immediately Invocable Function expression -IIFEs

(function(name) {
  console.log(`Name ${name}`)
})('Pepperoni');

// Property Methods

const todo = {
  add: function() {
      console.log('Add todo');
  },
  edit: function(id) {
  console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo...')
}

todo.add();
todo.edit();
todo.delete();