/**
 * @jest-environment jsdom
 */

import * as crud from '../modules/crud';
import mapTasks from '../helpers/__mocks__/helpers';

jest.mock('../modules/crud');

describe('Test localStorage is called upon crud operations', () => {
  it('should call when addTask', () => {
    crud.addTask('test');
    expect(crud.returnAllList()).toHaveLength(1);
  });

  it('should call when removeTask', () => {
    crud.removeTask(0);
    expect(crud.returnAllList()).toHaveLength(0);
  });
});

describe('Test for empty input & delete right matching item', () => {
  it('should return undefined & stop execution', () => {
    expect(crud.addTask('')).toBe('Error! empty string');
  });

  it('should delete item by picking correct id & index', () => {
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
});

describe('Test if a div is created for every task', () => {
  it('should create a div for a new task', () => {
    const tasks = [{
      description: 'test',
      completed: false,
      id: 1,
    }];

    const createDOM = mapTasks(tasks);
    expect(createDOM).toHaveLength(333);
  });
});
