import todo from '../index.js';
//Add proper testing, instead of this manual BS

console.log(todo);

console.log(todo.tasks());
todo.add({name: 'Node Modules'});
console.log(todo.tasks());

