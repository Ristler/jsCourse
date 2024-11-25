'use strict';
const target = document.querySelector('#target')

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i = 0; i < students.length; i++) {
  let element = document.createElement('option')
  const name = document.createTextNode(students[i].name)
  element.value = students[i].id

  element.append(name)
  target.appendChild(element);

}