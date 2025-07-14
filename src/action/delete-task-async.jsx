export const deleteTaskAsync = (requestServer, id) => () => 
	requestServer('deleteTask', id)

