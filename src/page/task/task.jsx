import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router';
import styled from 'styled-components';
import { todoTodoSelect } from '../../selectors';
import { useEffect, useLayoutEffect, useState } from 'react';
import { deleteTodos, loadTodoData } from '../../action';
import { useServer } from '../../hooks';
import { TaskInfo, Comments, TaskForm } from './components';

const TaskContainer = ({ className }) => {
	const params = useParams();
	const todo = useSelector(todoTodoSelect);
	const [isLoading, setIsLoading] = useState(true);
	const isCreating = useMatch('./todos');
	const isEditing = useMatch('/todos/:id/:id/edit');

	const dispatch = useDispatch();
	const requestServer = useServer();

	useLayoutEffect(() => {
		dispatch(deleteTodos);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		dispatch(loadTodoData(requestServer, params.id)).then(() => {
			setIsLoading(false);
		});
	}, [dispatch, requestServer, params.id, isCreating]);

	if(isLoading){
		return null
	}

	const SpecialFormTask =
		isCreating || isEditing ? (
			<TaskForm todo={todo} />
		) : (
			<div className={className}>
				<TaskInfo todo={todo} />
				<Comments comment={todo.comment} id={todo.id} />
			</div>
		);

	return SpecialFormTask;
};

export const Task = styled(TaskContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
