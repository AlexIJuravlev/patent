import { setTodoData } from "./set-post-data"

export const loadTodoData = (requestServer, postId) => (dispatch) => requestServer('fetchTodos', postId).then((todoData)=>{
	if(todoData.res){
		dispatch(setTodoData(todoData.res))
	}
	return todoData
})
