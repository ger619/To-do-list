/**
 * @jest-environment jsdom
 */
import TodoList from './modules/todolist.js';

describe('Check if function are working', () => {
  const testTask = new TodoList();

  test('Check if the addTask function is working', () => {
    testTask.addTask('test');
    testTask.addTask('test2');
    expect(testTask.listArray[0].description).toBe('test');
  });

  test('Check if the delete function is working', () => {
    testTask.removeTask(1);
    expect(testTask.listArray.length).toBe(1);
  });

  test('Check if the edit function is working', () => {
    testTask.editTask(1, 'test');
    expect(testTask.listArray[0].description).toBe('test');
  });

  test('Check if the changeComplete function is working', () => {
    testTask.changeComplete(1);
    expect(testTask.listArray[0].completed).toBe(true);
  });

  test('Check if the clearCompleted function is working', () => {
    testTask.clearCompleted();
    expect(testTask.listArray.length).toBe(0);
  });
});