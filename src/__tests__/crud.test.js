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
    const tasks = [
      {
        description: 'New task',
        completed: false,
        id: 4,
      },
    ];

    const createDOM = mapTasks(tasks);
    expect(createDOM).toHaveLength(337);
  });
});

describe('Test for editing the task description', () => {
  it('should edit the task description value', () => {
    let event = {
      target: { value: 'Value edited.' },
      id: 1,
    };
    let tasks = [{ description: 'No edit value.', completed: false, id: 1 }];
    crud.editTask(event, tasks);
    expect(tasks[0].description).toBe(event.target.value);
  });

  it('should fail to edit if object is not found', () => {
    let event = {
      target: { value: 'Value edited.' },
      id: 1,
    };
    let tasks = [{ description: 'No edit value.', completed: false, id: 1 }];
    crud.editTask(event, tasks);
    expect(tasks[1]).toBeUndefined();
  });
});
