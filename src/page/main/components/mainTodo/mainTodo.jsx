import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServer } from '../../../../hooks';
import { UsersCard } from './components';
import { ROLE} from '../../../../constant';
import { Loader } from '../../../../components';

const MainTodoContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
	const requestServer = useServer();

	useEffect(() => {
		setIsLoading(true)
		setTimeout(()=>{
			requestServer('fetchUsers')
				.then((loadedUsers) => {
					setUsers(loadedUsers.res);
				})
				.catch((error) => {
					console.error(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}, 500)
	}, [requestServer]);

	const filterName = users.filter((user) => user.role_id !== ROLE.ADMIN);

	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{' '}
					{filterName.map(({ login, id }) => (
						<UsersCard key={id} id={id} login={login} />
					))}
				</>
			)}
		</div>
	);
};

export const MainTodo = styled(MainTodoContainer)`
	display: flex;
	margin: 50px 50px;
	justify-content: center;
	flex-wrap: wrap;
`;
