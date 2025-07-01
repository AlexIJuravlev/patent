import styled from 'styled-components';
import { TableList, TaskUser } from './components';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useServer } from '../../hooks';
import { Loader } from '../../components';

const TodoListContainer = ({ className }) => {
	const params = useParams();
	const requestServer = useServer();
	const [todoListUser, setTodoListUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		setTimeout(()=>{

			requestServer('fetchTodos', params.id)
				.then((loadedTodo) => {
					if (
						JSON.stringify(loadedTodo?.res) !== JSON.stringify(todoListUser)
					) {
						setTodoListUser(loadedTodo.res);
					}
				})
				.catch((error) => {
					console.error(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		},500)

	}, [requestServer, params.id, todoListUser]);


	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<TableList />
					{todoListUser.map(
						({ id, deadline, content, published_at, title, done }) => (
							<TaskUser
								key={id}
								id={id}
								deadline={deadline}
								content={content}
								published_at={published_at}
								title={title}
								done={done}
							/>
						),
					)}
				</>
			)}
		</div>
	);
};

export const TodoList = styled(TodoListContainer)``;
