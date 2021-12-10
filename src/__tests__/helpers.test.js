/**
 * @jest-environment jsdom
 */

import {
  clearAllCompleted,
  setCompleted,
} from '../helpers/__mocks__/helpers';

// jest.mock('../helpers/helpers.js');

describe('Updates a task completed status and removes completed tasks', () => {
  const taskArray = [{
    description: 'Task 1',
    completed: false,
    id: 1,
  },
  {

    description: 'Task 1',
    completed: true,
    id: 2,
  },
  ];

  test('should update a task completed status', () => {
    expect(setCompleted(taskArray[0].id, taskArray)).toEqual(true);
  });

  test('should remove all task completed', () => {
    expect(clearAllCompleted(taskArray)).toHaveLength(0);
  });
});
