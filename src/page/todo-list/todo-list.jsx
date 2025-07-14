import styled from 'styled-components';
import { TableList, TaskUser } from './components';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useServer } from '../../hooks';
import { Loader } from '../../components';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../selectors';

const TodoListContainer = ({ className }) => {
	const params = useParams();
	const requestServer = useServer();
	const [todoListUser, setTodoListUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate()
	const userId = useSelector(selectUserId)

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			requestServer('fetchTodos', params.id || userId)
				.then((loadedTodo) => {
					if (loadedTodo.error) {
						console.error(loadedTodo.error);
					}
					if (
						JSON.stringify(loadedTodo?.res) !== JSON.stringify(todoListUser)
					) {
						setTodoListUser(loadedTodo.res);
					}
				})
				.catch(() => {
					navigate('/*');
				})
				.finally(() => {
					setIsLoading(false);
				});
		}, 300);
	}, [requestServer, params.id, todoListUser, navigate, userId]);


	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<TableList />
					{todoListUser.map(
						({
							id,
							deadline,
							content,
							published_at,
							title,
							done,
							user_id,
						}) => (
							<TaskUser
								key={id}
								id={id}
								deadline={deadline}
								content={content}
								published_at={published_at}
								title={title}
								done={done}
								userId={user_id}
							/>
						),
					)}
				</>
			)}
		</div>
	);
};

export const TodoList = styled(TodoListContainer)``;
