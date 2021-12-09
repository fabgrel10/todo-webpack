/**
 * @jest-environment jsdom
 */

import * as crud from '../modules/crud';
import { localStorageMock } from '../modules/__mocks__/crud';

jest.mock('../modules/crud');

describe('Add and remove a task', () => {
  localStorageMock.getAll();
  const newTask = { description: 'new task', completed: false, id: 1 };

  test('Add a new task', () => {
    crud.addTask('new task', []);
    localStorageMock.getAll();
    expect(localStorageMock.getItem('tasks')).toBe(([newTask]));
  });
});
