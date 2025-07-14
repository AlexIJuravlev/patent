import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useServer } from '../../../../hooks';

const UserContainer = ({ className, login, role_id, roles, id }) => {
	const [selectRoleId, setSelectRoleId] = useState(role_id);
	const [initialRole, setInitialRole] = useState(role_id)
	const [selectJobId, setSelectJobId] = useState('');
	const requestServer = useServer()

	const compareMeaning = selectRoleId === initialRole

	useLayoutEffect(() => {
		const roleName = roles.find(({ id }) => Number(id) === selectRoleId);
		setSelectJobId(roleName.name);

	}, [roles, selectRoleId]);


	const onJobChange = ({ target }) => {
		setSelectRoleId(Number(target.value));
	};


	const saveRole = (id, roleId, job) => {
		requestServer('updateRole', id, roleId, job).then(() => setInitialRole(roleId));
	};


	return (
		<div className={className}>
			<>
				<div className='login'>{login}</div>
				<select value={selectRoleId} onChange={onJobChange}>
					{roles.map(({ id: roleId, name }) => {
						return (
							<option key={roleId} value={roleId}>
								{name}
							</option>
						);
					})}
				</select>
			</>
			<Icon
				id='fa-floppy-o'
				margin='0 20px 0 0'
				color={compareMeaning ? '#ccc' : 'black'}
				onClick={
					compareMeaning ? null : () => saveRole(id, selectRoleId, selectJobId)
				}
				disabled={compareMeaning}
			/>
		</div>
	);
};

export const User = styled(UserContainer)`
	display: flex;
	justify-content: space-between;
	margin: 10px 10px;
	padding: 5px 15px;
	border: 1px solid black;

	select {
		display: flex;
		justify-content: center;

	}

	.login {
		text-transform: capitalize;
		width: 70px;
	}
`;
