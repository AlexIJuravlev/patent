export const getTodos = async (id) =>
	fetch(`http://localhost:3005/todos/?user_id=${id}`)
		.then((loadedTodos) => loadedTodos.json())
		.then((loadedTodos) => loadedTodos);
