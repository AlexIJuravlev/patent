const ALL_COMMNETS_URL = `http://localhost:3005/comments`
const TODOS_COMMENTS_URL = `http://localhost:3005/comments/?todos_id=`;

export const getComment = async (todosId) => {
	const url = todosId === undefined ? ALL_COMMNETS_URL : TODOS_COMMENTS_URL + todosId;

	return fetch(url)
		.then((loadedComment) => loadedComment.json())
		.then((loadedComment) => loadedComment);
}
