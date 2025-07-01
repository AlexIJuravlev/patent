import { setTodoData } from "./set-todos";

export const deleteCommentAsync = (requestServer, todoId, comId) => (dispatch) => {
	requestServer('deleteCommentTask', todoId, comId).then((taskData)=> {
		dispatch(setTodoData(taskData.res))
		console.log(taskData.res);
	});

}
