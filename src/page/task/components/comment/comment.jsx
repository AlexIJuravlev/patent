import { useState } from 'react';
import { Comment } from './components';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useServer } from '../../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../../../selectors';
import { addCommentAsync } from '../../../../action';


const CommentsContainer = ({ className, comment, id }) => {
	const [newComment, setNewComment] = useState('');
	const userName = useSelector(selectUserName)
	const requestServer = useServer();
	const dispatch = useDispatch()

	const addNewComment = (userName, newComment, id) => {
		dispatch(addCommentAsync(requestServer, userName, newComment, id));
		setNewComment('');
	};



	return (
		<div className={className}>
			<div className='new-comment'>
				<textarea
					name='comment'
					placeholder='Комментарий...'
					className='text'
					value={newComment}
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id='fa-space-shuttle'
					margin='0 0 0 10px'
					color='black'
					onClick={() => addNewComment(userName, newComment, id)}
				/>
			</div>
			{comment.map(({ id, content, author_login, publishedAt, todos_id }) => (
				<Comment
					id={id}
					key={id}
					todos_id={todos_id}
					content={content}
					author_login={author_login}
					publishedAt={publishedAt}
				/>
			))}
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	width: 55%;
	margin: 10px;

	.new-comment {
		display: flex;
		margin: 0 0 20px 0;
	}
	.text {
		height: 80px;
		width: 100%;
		resize: none;
	}
`;
