import { setTodoData } from './set-todos';

export const loadTodoData = (requestServer, id) => (dispatch) => {
	requestServer('fetchTodo', id).then((todoData) => {
		dispatch(setTodoData(todoData.res));
	});
};

