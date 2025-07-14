import { setTodoData } from "./set-todos";

export const addCommentAsync = (requestServer, user, title, taskId) => (dispatch) => {
	requestServer('addCommentTask', user, title, taskId).then((taskData) => {
		dispatch(setTodoData(taskData.res));
	});
};
