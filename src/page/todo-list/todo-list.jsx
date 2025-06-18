import styled from 'styled-components';
import { TableList, TaskUser } from './components';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useServer } from '../../hooks';

const TodoListContainer = ({ className }) => {
	const params = useParams();
	const requestServer = useServer();
	const [todoListUser, setTodoListUser] = useState([]);

	useEffect(() => {
		requestServer('fetchTodos', params.id).then((loadedTodo) => {
			setTodoListUser(loadedTodo.res.todos);
			console.log('then',loadedTodo.res.todos);
		});
	}, [requestServer, params.id]);

	console.log('todo',todoListUser);


	return (
		<div className={className}>
			<TableList />
			{todoListUser.map(({ id, deadline, content, published_at, title, done }) => (
				<TaskUser
					key={id}
					id={id}
					deadline={deadline}
					content={content}
					published_at={published_at}
					title={title}
					done={done}
				/>
			))}
		</div>
	);
};

export const TodoList = styled(TodoListContainer)``;
