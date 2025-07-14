import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { useNavigate, useParams } from 'react-router';
import { useServer } from '../../../../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAsync } from '../../../../../../action';
import { todoUserIdSelect } from '../../../../../../selectors';

const ControlUnitContainet = ({ className, onClick, icon }) => {
	const params = useParams();
	const requestServer = useServer();
	const dispatch = useDispatch();
	const navigete = useNavigate();
	const userId = useSelector(todoUserIdSelect)


	const deleteTask = () => {
		dispatch(deleteTaskAsync(requestServer, params.id));
		navigete(`/todos/${userId}`);
	};

	return (
		<div className={className}>
			<Icon
				id={icon}
				margin='10px 10px 0 10px'
				color='black'
				onClick={onClick}
			/>
			<Icon
				id='fa-trash'
				margin='10px 20px 0 10px'
				color='black'
				onClick={deleteTask}
			/>
		</div>
	);
};

export const ControlUnit = styled(ControlUnitContainet)`
display:flex;
right: 0;
float: right;
`;
