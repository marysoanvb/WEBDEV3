// document.getElementById

console.log(document.getElementById('task-title'));


const taskTitle = document.getElementById('task-title');

taskTitle.style.background = 'purple';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '7px';
taskTitle.style.padding = 'none';
taskTitle.style.fontStyle = 'bold';

taskTitle.textContent = 'NAMES';
taskTitle.innerText = 'Names';
taskTitle.innerHTML = '<h1 style="color: yellow">To-Do List</h1>';

