export const getTodo = async (Id) =>
	fetch(`http://localhost:3005/todos/${Id}`)
		.then((loadedTodos) => loadedTodos.json())
		.then((loadedTodos) => loadedTodos);
