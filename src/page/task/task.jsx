import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router';
import styled from 'styled-components';
import { todoTodoSelect } from '../../selectors';
import { useEffect, useLayoutEffect, useState } from 'react';
import { deleteTodos, loadTodoData } from '../../action';
import { useServer } from '../../hooks';
import { TaskInfo, Comments, TaskForm } from './components';
import { Loader } from '../../components';

const TaskContainer = ({ className }) => {
	const params = useParams();
	const todo = useSelector(todoTodoSelect);
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = useMatch('/todos/:id/:id/edit');

	const dispatch = useDispatch();
	const requestServer = useServer();

	useLayoutEffect(() => {
		dispatch(deleteTodos);
	}, [dispatch, ]);

	useEffect(() => {
		setIsLoading(true)
		setTimeout(()=>{
			dispatch(loadTodoData(requestServer, params.id)).then(() => {
				setIsLoading(false);
			});
		}, 300)

	}, [dispatch, requestServer, params.id]);


	const SpecialFormTask =
	 isEditing ? (
			<TaskForm todo={todo} />
		) : (
			<div className={className}>
				<TaskInfo todo={todo} />
				<Comments comment={todo.comment} id={todo.id} />
			</div>
		);

	return (<>{isLoading ? <Loader/> : SpecialFormTask}</>) ;
};

export const Task = styled(TaskContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
