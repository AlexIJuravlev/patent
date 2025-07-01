import styled from 'styled-components';
import { ControlUnit } from './components';
import { useSelector } from 'react-redux';
import { todoCheckSelect } from '../../../../selectors';


const TaskInfoContainer = ({
	className,
	todo: { title, content, deadline, published_at },
}) => {

	const check = useSelector(todoCheckSelect)


	return (
		<div className={className}>
			<ControlUnit />
			<div className='task-box'>
				<h2>{title}</h2>
				<div className='task-time'>
					<div className='published_at'>
						<div>Дата создания</div>
						<div className='published_at_content'>{published_at}</div>
					</div>
					<div className='deadline'>
						<div>Срок выполнения</div>
						<div className='deadline_content'>{deadline}</div>
					</div>
				</div>
				<div className='task-info'>
					<div>
						<div>Описание задачи</div>
						<div className='content'>{content}</div>
					</div>
					<div className='done'>
						<div>Статус выполнения</div>
						<input
							type='checkbox'
							className='done_check'
							checked={check}
							readOnly
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const TaskInfo = styled(TaskInfoContainer)`
	width: 70%;
	margin: 50px auto;
	border: 1px solid black;

	.task-box {
		margin: 40px;
	}

	h2 {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 20px 0 40px;
	}
	.task-time {
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 20px 80px;
	}

	.task-info {
		display: flex;
		justify-content: space-between;
		margin: 50px 80px;
	}

	.content {
		width: 200px;
		margin: 10px 0 0 0;
	}

	.done {
		text-align: center;
	}

	.done_check {
		margin: 10px 0 0 0;
	}

	.published_at {
		margin: 0 0 0 15px;
	}
	.published_at_content {
		margin: 10px 0 0 0;
	}

	.deadline{
		margin: 0 10px 0 0;
	}
`;
