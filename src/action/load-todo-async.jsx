import { setTodoData } from './set-todos';

export const loadTodoData = (requestServer, id) => (dispatch) =>
	requestServer('fetchTodo', id).then((todoData) => {
		if(todoData.res){
			dispatch(setTodoData(todoData.res));
		}
		return todoData
	});
;

