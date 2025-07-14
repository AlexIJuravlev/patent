export const deleteSession = async (id) => {
	fetch(`http://localhost:3005/session/${id}`, {
		method: 'DELETE',
	});
}
