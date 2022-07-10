import {updateLocalStorage} from './pageFunc.js'

let tasks = JSON.parse( localStorage.getItem('ToDoTasks'));

export function updateStatus(){
  const index = parseInt(this.parentNode.querySelector('.task').id,10);
  const status = this.checked;
  tasks[index].completed = status;
  updateLocalStorage(tasks);
}

export const clearAllCompleted = () => {
  tasks = JSON.parse( localStorage.getItem('ToDoTasks'));
  console.log(tasks);
  tasks = tasks.filter((task) => !task.completed);
  console.log(tasks);
  updateLocalStorage(tasks);
  
  window.location.reload();
}