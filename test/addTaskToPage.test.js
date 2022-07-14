/**
 * @jest-environment jsdom
 */
import { addTaskToPage } from "../src/addTaskToPage";

test('Add some task to the page', () => {
  document.body.innerHTML = '<ul>'+
  '<div class="dragContainer">'+
      '</div>'+
      '</ul>';

  const newTask = {
    description: 'test',
    completed: false,
    index: 0,
  }
  addTaskToPage(newTask);
  const list = document.querySelectorAll('li')
  expect(list).toHaveLength(2);
})