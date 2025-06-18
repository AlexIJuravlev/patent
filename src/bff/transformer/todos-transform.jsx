export const todosTransform = (dbTodos) => ({
	id: dbTodos.id,
	title: dbTodos.title,
  content: dbTodos.content,
  publishedAt: dbTodos.published_at,
  deadline: dbTodos.deadline,
  user: dbTodos.user
});
