/**
 * @jest-environment jsdom
 */

import * as crud from '../modules/crud';

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
    let tasks = [];
    for (let i = 1; i <= 5; i += 1) {
      let task = {
        description: `description`,
        completed: false,
        id: i,
      };
      tasks.push(task);
    }
    let deletedItem = tasks[2];
    crud.removeTask(3);
    expect(deletedItem.id).toBe(3);
  });
});
