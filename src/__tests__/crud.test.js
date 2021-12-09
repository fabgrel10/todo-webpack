/**
 * @jest-environment jsdom
 */

import * as crud from '../modules/crud';
import mapTasks from '../helpers/__mocks__/helpers';

jest.mock('../modules/crud');

describe('localStorage is called upon crud operations', () => {
  it('should call when addTask', () => {
    crud.addTask('New Task');
    expect(crud.localStorage()).toHaveLength(4);
  });

  it('should remove a task from the array', () => {
    crud.removeTask(1);
    expect(crud.localStorage()).toHaveLength(3);
  });
});

describe('Empty input returns false', () => {
  it('should return undefined & stop execution', () => {
    expect(crud.addTask('')).toBe(false);
  });

  it('should delete the correct task', () => {
    const tasks = [];
    for (let i = 1; i <= 5; i += 1) {
      const task = {
        description: 'description',
        completed: false,
        id: i,
      };
      tasks.push(task);
    }
    const deletedItem = tasks[2];
    crud.removeTask(3);
    expect(deletedItem.id).toBe(3);
  });
  crud.localStorage();
});

describe('Injects DOM elements upon task creation', () => {
  it('should create a div for a new task', () => {
    const tasks = [{
      description: 'New task',
      completed: false,
      id: 4,
    }];

    const createDOM = mapTasks(tasks);
    expect(createDOM).toHaveLength(337);
  });
});

describe('Edit tasks', () => {
  const tasks = crud.localStorage();

  it('should change the description of a task', () => {
    const modifiedTask = {
      description: 'Changed description',
      completed: false,
      id: 2,
    };
    crud.editTask(modifiedTask, tasks);
    expect(tasks[0].description).toBe(modifiedTask)
  });
});

