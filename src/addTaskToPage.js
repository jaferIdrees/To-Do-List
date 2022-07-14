import { enableEdit, editTask, removeTask } from './pageFunc.js';
import { updateStatus, } from './status.js';

export function addTaskToPage(task) {
  const iTag = document.createElement('i');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  span2.className = 'trash';
  span2.append(span1, iTag);
  const a1 = document.createElement('a');
  a1.className = 'trashCont hide';
  a1.appendChild(span2);
  a1.onmousedown = ((e)=> e.preventDefault());
  a1.onclick = removeTask;
  const a2 = document.createElement('a');
  a2.className = 'editIcon';
  a2.onclick = enableEdit;
  const icnCont = document.createElement('div');
  icnCont.className = 'icnCont';
  icnCont.append(a1, a2);


  const chckbx = document.createElement('input');
  const desc = document.createElement('input');
  desc.id = task.index;
  desc.value = task.description;
  desc.className = 'task';
  desc.disabled = true;
  desc.onchange = editTask;
  desc.onblur = editTask;
  chckbx.type = 'checkbox';
  chckbx.checked = task.completed;
  chckbx.onchange = updateStatus;
  const litem = document.createElement('li');
  litem.className = "lItem draggable";
  litem.append(chckbx, desc, icnCont);
  // litem.onfocusout = disableEdit;
  // litem.onfocus = gotFocus;
  // litem.onblur = editTask;
  const ulist = document.querySelector('.dragContainer');
  ulist.appendChild(litem);
}