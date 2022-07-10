export default function activateDrag() {
  const draggables = document.querySelectorAll('.lItem');
  const container = document.querySelector('.dragContainer')
  draggables.forEach(task => task.draggable = true);

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      const tasks = JSON.parse( localStorage.getItem('ToDoTasks'));
      const draggableElements = [...container.querySelectorAll('.draggable')]
      for (let i=0; i<draggableElements.length; i++) {
        let index = parseInt(draggableElements[i].querySelector('.task').id,10);
        tasks[index].index = i;
        draggableElements[i].querySelector('.task').id = i;
      }
      tasks.sort((a,b) => a.index > b.index ? 1 :-1);
      localStorage.setItem('ToDoTasks', JSON.stringify(tasks))
    })
  });

  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }
}