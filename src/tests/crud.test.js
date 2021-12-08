import * as crud from '../modules/crud';

jest.mock('../modules/crud');

describe('Test localStorage is called upon crud operations', () => {
  it('should call when addTask', () => {
    crud.addTask.mockReturnValue(Promise.resolve());
    crud.addTask('test', {});
    expect(crud.addTask).toHaveBeenCalledWith('test', {});
  });

  it('should call when editTask', () => {
    crud.editTask.mockReturnValue(Promise.resolve());
    crud.editTask('test', {});
    expect(crud.editTask).toHaveBeenCalledWith('test', {});
  });

  it('should call when removeTask', () => {
    crud.removeTask.mockReturnValue(Promise.resolve());
    crud.removeTask('test', {});
    expect(crud.removeTask).toHaveBeenCalledWith('test', {});
  });
});
