const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('');

const createLi = document.createElement('li')
const createDeleteButton = document.createElement('button')

createLi.textContent = input.value;

createDeleteButton.textContent = '❌';

createLi.append(createDeleteButton);

list.append(createLi);