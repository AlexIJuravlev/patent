import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useServer } from '../../../../hooks';
import { useDispatch} from 'react-redux';
import { deleteTodos } from '../../../../action';

const TaskUserContainer = ({ className, id, deadline, content, title, done }) => {
	const [isCheked, setIsCheked] = useState(done);
	const [comment, setComment] = useState(content);
	// const [imgTask, setImgTask] = useState('');
	const requestServer = useServer();
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		requestServer('updateCheked', id, isCheked);
	}, [requestServer, id, isCheked]);

	const handleChech = () => {
		setIsCheked(!isCheked);
	};

	const handleComment = ({ target }) => {
		setComment(target.value);
	};

	const saveComment = () => {
		requestServer('updateContent', id, comment);
	};

	const pageOfTask = () => {
		dispatch(deleteTodos());
		navigate(`./${id}`)
	};

	const savePhoto = () => {};

	return (
		<div className={className}>
			<div className='box-task'>
				<button>
					<div className='box-title' onClick={pageOfTask}>
						{title}
					</div>
				</button>
				<div className='box-deadline'>{deadline}</div>
				<textarea
					value={comment}
					className='box-content'
					onChange={handleComment}
					rows='3'
				/>
				<Icon
					id='fa-download'
					margin='0 85px 0 50px'
					color='black'
					onClick={savePhoto}
				/>
				<input
					className='box-check'
					type='checkbox'
					defaultChecked={isCheked}
					onChange={handleChech}
				/>
			</div>
			<Icon
				id='fa-floppy-o'
				margin='25px 0 0 50px'
				color='black'
				onClick={saveComment}
			/>
		</div>
	);
};
export const TaskUser = styled(TaskUserContainer)`
	display: flex;
	margin: 60px auto;
	max-width: 85%;
	border: 1px solid black;
	border-radius: 25px;
	position: relative;

	a {
		text-decoration: none;
		color: white;
		border: 1px solid black;
		border-radius: 25px;
		background-color: #563de4;
		padding: 5px 0 5px 5px;
	}

	.box-task {
		display: flex;
		align-items: center;
		text-align: center;
		margin: 10px 30px;
	}

	.box-title {
		width: 150px;
	}

	.box-deadline {
		width: 100px;
		margin: 0 0 0 30px;
	}

	.box-check {
		margin: 0;
	}

	.box-content {
		width: 450px;
		margin: 0 0 0 20px;
		font-size: 18px;
		text-align: center;
		border: none;
		resize: none;
	}
`;
