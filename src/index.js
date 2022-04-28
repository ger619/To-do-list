// css files here
import './style.css';
import _ from 'lodash';
import TaskAll from '../modules/taskall';
import showTasks from '../modules/showtask';
import Task from '../modules/tasks';


document.addEventListener('DOMContentLoaded', showTasks.displayTasks);

document.querySelector('#todo-list').addEventListener('submit', (e) => {
    const job = document.querySelector('#input').value;
    const task = new Task(job);
    showTasks.addBookToList(task);
    TaskAll.addBook(task);
    showTasks.clearFields();
    e.preventDefault();
});

document.querySelector('#todo-list').addEventListener('click', (e) => {
    showTasks.deleteBook(e.target);

    TaskAll.removeBook(e.target.parentElement.previousElementSibling.textContent);
});