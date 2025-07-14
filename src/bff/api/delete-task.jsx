export const deleteTaskAsync = async (id) => {
	fetch(`http://localhost:3005/todos/${id}`, {
		method: 'DELETE',
	});
};
