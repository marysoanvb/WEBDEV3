const person = {
    firstName: 'Pepperoni',
    lastName: 'Pizza',
    age: 30,
    email: 'Pepperoni_Pizza@gmail.com',
    hobbies: ['Anime', 'Tiktok'],
    address: {
        municipality: 'Cabanatuan City',
        province: 'Nueva Ecija'
    },
    getBirthYear: function() {
        return 2020 - this.age;
    }

};

let value;

value = person;

value = person.firstName;
value = person.age;
value = person.hobbies[0];
value = person. address.municipality;
value = person.getBirthYear();

console.log(value);

const people = [{name: 'Pepperoni', age: 30}, {name: 'Hawaiian', age: 25}, {name: 'Five Cheese', age: 20}];

for(let i = 0; i < people.length; i++){
console.log(people[i].age);
}