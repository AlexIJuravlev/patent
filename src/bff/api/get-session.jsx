export const getSession = async (hash) =>
	fetch(`http://localhost:3005/session/?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession);
