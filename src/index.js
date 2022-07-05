//import _ from 'lodash';
import './style.css';

let tasks = [
  {description: 'test1',
completed: false,
index: 1,},
{description: 'test2',
completed: false,
index: 2,}
]

function addTask(task) {
  const chckbx = document.createElement('input');
  const desc = document.createElement('p')
  desc.innerText = task.description;
  chckbx.type = 'checkbox';
  chckbx.checked = task.completed;
  const litem = document.createElement('li');
  litem.className = "lItem";
  litem.append(chckbx,desc);
  const ulist = document.getElementById('ulist');
  ulist.appendChild(litem);
}

function updateList(tasks){
  tasks.sort((a,b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0))
  for (let task of tasks) {
    addTask(task);
  }
}

window.addEventListener('load',updateList(tasks));
/* function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
} */

// document.body.appendChild(component());