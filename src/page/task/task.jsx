import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { todoTodoSelect, todoCommentSelect } from '../../selectors';
import { useEffect } from 'react';
import { loadTodoData } from '../../action';
import { useServer } from '../../hooks';
import { TaskInfo, Comments } from './components';

const TaskContainer = ({ className }) => {
	const params = useParams();
	const todo = useSelector(todoTodoSelect);
	const comment = useSelector(todoCommentSelect);

	const dispatch = useDispatch();
	const requestServer = useServer();

	console.log(comment);

	useEffect(() => {
		dispatch(loadTodoData(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);

	return (
		<div className={className}>
			<TaskInfo todo={todo} />
			<Comments comment={comment} />
		</div>
	);
};

export const Task = styled(TaskContainer)`
display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
