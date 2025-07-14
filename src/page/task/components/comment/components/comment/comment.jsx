import styled from "styled-components";
import { Icon } from "../../../../../../components";
import { LogoName } from "../logo-name/logo-name";
import { useDispatch } from "react-redux";
import { useServer } from "../../../../../../hooks";
import { deleteCommentAsync } from "../../../../../../action";

const CommentContainer = ({
	className,
	id,
	content,
	todos_id,
	author_login,
	publishedAt,
}) => {
	const dispatch = useDispatch()
	const requestServer = useServer()

	const deleteComment = (todos_id, id) => {
		dispatch(deleteCommentAsync(requestServer, todos_id, id));
	};

	return (
		<div className={className}>
			<div className='comment'>
				<div className='comment_box'>
					<div className='author_text'>
						<LogoName>{author_login}</LogoName>
						{author_login}
					</div>
					<div className='published_at'>
						{publishedAt}
						<Icon id='fa-calendar' color='black' margin='0 10px 0 10px ' />
					</div>
				</div>
				<div className='content'>{content}</div>
			</div>
			<Icon id='fa-trash' color='black' margin='0 10px 0 5px ' onClick={()=>{deleteComment(todos_id, id)}} />
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	margin: 10px 0;
	display: flex;

	.comment {
		border: 1px solid black;
		width: 100%;
	}

	.comment_box {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		margin: 10px;
	}

	.author_text {
		text-transform: capitalize;
		margin: 0 0 0 10px;
		display: flex;
		align-items: center;
	}

	.published_at {
		display: flex;
		margin: 0 20px 0;
		align-items: center;
	}

	.content {
		display: flex;
		margin: 20px;
	}
`;
