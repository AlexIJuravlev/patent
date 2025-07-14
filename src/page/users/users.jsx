import styled from 'styled-components';
import { TableUser, User } from './components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { useServer } from '../../hooks';
import { checkAccess } from '../../bff/utils';
import { ROLE } from '../../constant';

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const userRole = useSelector(selectUserRole);

	const requestServer = useServer();

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([requestServer('fetchRole'), requestServer('fetchUsers')]).then(
			([roleRes, userRes]) => {
				if (roleRes.error || userRes.error) {
					setErrorMessage(roleRes.error || userRes.error);
					return;
				}

				setRoles(roleRes.res);
				setUsers(userRes.res);
			},
		);
	}, [requestServer, userRole]);


	return (
		<div className={className}>
			<TableUser />
			{errorMessage? <div>Ошибка</div> : users.map(({ login, id, role_id }) => (
				<User key={id} id={id} roles={roles.filter((role)=> Number(role.id) !== ROLE.GUEST)} login={login} role_id={role_id} />
			))}
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	max-width: 500px;
`;
