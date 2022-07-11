import Task from './Task.js'

export function enableEdit(){
  this.parentNode.parentNode.querySelector('.task').disabled = false;
  this.parentNode.parentNode.querySelector('.task').focus();
  this.classList.add('hide');
  this.parentNode.querySelector('.trashCont').classList.remove('hide');
}

export function editTask(){
  const index = parseInt(this.parentNode.querySelector('.task').id,10);
  this.disabled = true;
  this.parentNode.querySelector('.icnCont').querySelector('.trashCont').classList.add('hide');
  this.parentNode.querySelector('.icnCont').querySelector('.editIcon').classList.remove('hide');
  this.parentNode.querySelector('.task').focus();
  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));
  tasks[index].description = this.parentNode.querySelector('.task').value;
  updateLocalStorage(tasks);
}

export function addTask(tasks,desc){
  const newTask = new Task(desc, tasks.length);
  tasks.push(newTask);
  updateLocalStorage(tasks);
  return newTask;
}

export function updateLocalStorage(tasks){
  localStorage.setItem('ToDoTasks',JSON.stringify(tasks));
}

export function removeTask(){
  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));
  const index = parseInt(this.parentNode.parentNode.querySelector('.task').id);
  console.log(`removeFun ${index}`)
  tasks.splice(index, 1);
  for (let i = 0; i < tasks.length; i++) tasks[i].index = i;
  updateLocalStorage(tasks);
  document.location.reload();
}