import { setTodoData } from './set-todos';

export const upgradeTodoAsync = (requestServer, id, title, content, deadline) => (dispatch) =>
	requestServer('updateTodo', id, title, content, deadline).then((todoData) => {
		if (todoData.res) {
			dispatch(setTodoData(todoData.res));
			console.log('asunc', todoData.res);
		}
		return todoData;
	});
;
