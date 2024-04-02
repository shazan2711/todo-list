#! /usr/bin/env node
import inquirer from 'inquirer';

let todos = [];

let shouldContinue = true;
while (shouldContinue) {
  let addTask = await inquirer.prompt([
    {
      name: 'todo',
      type: 'input',
      message: 'What you want to add in your list?'
    },
    {
      name: 'addMore',
      type: 'confirm', // yes or no type is confirm type
      message: 'Do you want to add more?',
      default: false
    }
  ]);
  todos.push(addTask.todo);
  shouldContinue = addTask.addMore;
}
console.log(todos);