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
