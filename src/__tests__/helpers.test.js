/**
 * @jest-environment jsdom
 */

jest.mock('../helpers/helpers.js')

 import { localStorage, setCompleted, clearAllCompleted } from '../helpers/__mocks__/helpers';

describe('Updates a task completed status and removes completed tasks', () => {
  test('should update a task completed status', () => {

    const tasks = localStorage();

    const task = {
      description: 'Task 1',
      completed: true,
      id: 1,
    };

    expect(setCompleted(task)).toEqual('task-completed');
  });

  test('should remove all task completed', () => {
    expect(clearAllCompleted()).toHaveLength(0);
  })
})