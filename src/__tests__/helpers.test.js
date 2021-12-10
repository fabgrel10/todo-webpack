/**
 * @jest-environment jsdom
 */

import {
  clearAllCompleted,
  setCompleted,
} from '../helpers/__mocks__/helpers';

jest.mock('../helpers/helpers.js');

describe('Updates a task completed status and removes completed tasks', () => {
  test('should update a task completed status', () => {
    const task = {
      description: 'Task 1',
      completed: true,
      id: 1,
    };

    expect(setCompleted(task)).toEqual('task-completed');
  });

  test('should remove all task completed', () => {
    expect(clearAllCompleted()).toHaveLength(0);
  });
});
