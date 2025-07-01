import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { todoTodoSelect } from '../../selectors';
import { useEffect } from 'react';
import { loadTodoData } from '../../action';
import { useServer } from '../../hooks';
import { TaskInfo, Comments } from './components';

const TaskContainer = ({ className }) => {
	const params = useParams();
	const todo = useSelector(todoTodoSelect);

	const dispatch = useDispatch();
	const requestServer = useServer();

	useEffect(() => {
		dispatch(loadTodoData(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);


	return (
		<div className={className}>
			<TaskInfo todo={todo} />
			<Comments comment={todo.comment} id={todo.id}  />
		</div>
	);
};

export const Task = styled(TaskContainer)`
display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
