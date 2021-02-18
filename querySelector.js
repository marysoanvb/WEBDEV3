//document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color ='purple';
document.querySelector('ul li').style.color ='red';


document.querySelector('li:last-child').style.color ='orange';
document.querySelector('li:nth-child(3)').style.color ='blue';
document.querySelector('li:nth-child(2)').style.color ='green';
document.querySelector('li:nth-child(2)').textContent ='To-Do Item';

document.querySelector('li:nth-child(odd)').style.background ='#ccc';
document.querySelector('li:nth-child(even)').style.background ='gray';
