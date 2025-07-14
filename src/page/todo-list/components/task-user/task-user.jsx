import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useServer } from '../../../../hooks';
import { useDispatch} from 'react-redux';
import { deleteTodos } from '../../../../action';

const TaskUserContainer = ({
	className,
	id,
	deadline,
	content,
	title,
	done,
	userId,
}) => {
	const [isCheked, setIsCheked] = useState(done);
	const requestServer = useServer();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		requestServer('updateCheked', id, isCheked);
	}, [requestServer, id, isCheked]);

	const handleChech = () => {
		setIsCheked(!isCheked);
	};

	const pageOfTask = () => {
		dispatch(deleteTodos());
		navigate(`/todos/${userId}/${id}`);
	};

	return (
		<div className={className}>
			<div className='box-task'>
				<button className='box-btn'>
					<div className='box-title' onClick={pageOfTask}>
						{title}
					</div>
				</button>
				<div className='box-deadline'>{deadline}</div>
				<div className='box-content'>{content}</div>
				<input
					className='box-check'
					type='checkbox'
					defaultChecked={isCheked}
					onChange={handleChech}
				/>
			</div>
		</div>
	);
};
export const TaskUser = styled(TaskUserContainer)`
	display: flex;
	margin: 30px auto;
	max-width: 85%;

	position: relative;

	a {
		text-decoration: none;
		color: white;
		border: 1px solid black;
		border-radius: 25px;
		background-color: #563de4;
		padding: 5px 0 5px 5px;
	}

	.box-btn {
		color: white;
		font-size: 16px;
		background-color: #563de4;
		border-radius: 25px;
		width: 150px;
		height: 50px;
		cursor: pointer;
	}

	.box-task {
		border: 1px solid black;
		border-radius: 25px;
		display: flex;
		align-items: center;
		text-align: center;
		margin: 0 30px;
		padding: 5px 40px;
	}

	.box-deadline {
		width: 100px;
		margin: 0 20px 0 30px;
	}

	.box-check {
		margin: 0 0 0 100px;
	}

	.box-content {
		width: 450px;
		margin: 0 auto;
		font-size: 18px;
		text-align: center;
		border: none;
		resize: none;
	}
`;
