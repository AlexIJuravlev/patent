import { useState } from 'react';
import { Comment } from './components';
import styled from 'styled-components';
import { Icon } from '../../../../components';


const CommentsContainer = ({ className, comment }) => {
	const [newComment, setNewComment] = useState('');

	console.log(comment);

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
				<Icon id='fa-space-shuttle' margin='0 0 0 10px' color='black' />
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
