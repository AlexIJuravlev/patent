import styled from 'styled-components';

const TaskUserContainer = ({
	className,
	id,
	deadline,
	content,
	published_at,
	title,
	done,
}) => {
	return <div className={className}>
		<div>{title}</div>
		<div>{deadline}</div>
		<input type='checkbox'></input>
		<div>{content}</div>
		<div></div>
		<div></div>
	</div>;
};
export const TaskUser = styled(TaskUserContainer)`
	display: flex;
	justify-content: space-between;
	margin: 60px auto;
	max-width: 75%;
	border: 1px solid black;
`;
