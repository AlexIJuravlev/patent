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
			if (JSON.stringify(loadedTodo?.res) !== JSON.stringify(todoListUser)) {
				setTodoListUser(loadedTodo.res);
			}
		});
	}, [requestServer, params.id, todoListUser]);


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
