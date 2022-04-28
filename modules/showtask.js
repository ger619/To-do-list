import AllTask from './taskall.js';

export default class showTasks {
  static displayTasks() {
    const tasks = AllTask.getTasks();

    tasks.forEach((task) => showTasks.addBookToList(task));
  }

  static addBookToList(task) {
    const list = document.querySelector('#todo-list');
    const row = document.createElement('ul');
    row.innerHTML = `
       
        <li>${task.job} <button class="delete">Remove task</button> </li>
       

      `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#input').value = '';
  }
}