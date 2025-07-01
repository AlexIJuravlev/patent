import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { Link, useNavigate, useParams } from 'react-router';
import { useServer } from '../../../../../../hooks';
import { useDispatch } from 'react-redux';
import { deleteTaskAsync } from '../../../../../../action';

const ControlUnitContainet = ({ className }) => {
	const params = useParams()
	const requestServer = useServer()
	const dispatch = useDispatch()
	const navigete = useNavigate()


	const deleteTask = () => {
		dispatch(deleteTaskAsync(requestServer, params.id))
		navigete(-1)
	}

	return (
		<div className={className}>
			<Link to={`./edit`}>
				<Icon id='fa-pencil-square-o' margin='10px 10px 0 10px' color='black' onClick={()=>{}} />
			</Link>
			<Icon id='fa-trash' margin='10px 20px 0 10px' color='black' onClick={deleteTask} />
		</div>
	);
};

export const ControlUnit = styled(ControlUnitContainet)`
display:flex;
right: 0;
float: right;
`;
