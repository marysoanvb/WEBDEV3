let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
value = list;

//Get Child Nodes
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType;

// 1 - element
// 2 - Attribute (deprecated)
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype

// children element nodes

value = list.children;
value = list.children[0];
list.children[0].textContent = 'Enter Name Here';

console.log(value);