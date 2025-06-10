import styled from 'styled-components';
import { ROLE } from '../../../../constant';
import { Button } from '../../../button/button';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole, selectUserName, selectUserSession } from '../../../../selectors';
import { Icon } from '../../../icon/icon';
import { logout } from '../../../../action';

const UserName = styled.div`
	color: white;
	text-transform: uppercase;
	margin-right: 100px;
	font-size: 20px;
`

const JobTitle = styled.div`
	color: white;
	font-size: 16px;
	margin: 0 15px ;
`;

const ControlPanelContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole)
	const user = useSelector(selectUserName)
	const dispatch = useDispatch()
	const session = useSelector(selectUserSession)
	const navigate = useNavigate()

	const onLogout = () => {
		dispatch(logout(session))
		navigate('/')
	}


	return (
		<div className={className}>
			{roleId === ROLE.GUEST ? (
				<Button>
					<Link to='/login'>Войти</Link>
				</Button>
			) : (
				<>
					<Icon
						id='fa-sign-out'
						margin='-2px 15px 0 0px'
						color='white'
						onClick={onLogout}
					/>
					<div className='data'>
						<UserName>{user}</UserName>
						<JobTitle>dsasda</JobTitle>
					</div>
				</>
			)}
		</div>
	);
};



export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;

	button {
		margin: 10px 50px 0 0;
		padding: 15px;
		border-radius: 10px;
		transition: 0.2s;
	}

	.data {
		display: flex;
		flex-direction: column;
	}

	a {
		position: relative;
		text-decoration: none;
		display: flex;
		justify-content: space-between;
		padding: 0 5px;
	}

	a:after,
	a:before {
		content: '';
		position: absolute;
		bottom: 1px;
		width: 0;
		height: 2px;
		transition: width 0.2s ease;
		background-color: #563de4;
	}

	a:before {
		left: 50%;
	}

	a:after {
		right: 50%;
	}

	a:hover:before,
	a:hover:after {
		width: 50%;
	}
`;
