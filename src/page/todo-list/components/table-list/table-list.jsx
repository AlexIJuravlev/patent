import styled from 'styled-components';

const TableListContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className='task'>Задача</div>
			<div className='deadline'>Срок</div>
			<div className='comment'>Коментарий</div>
			<div className='image'>Загрузить фото</div>
			<div className='done'>Исполнено</div>
		</div>
	);
};
export const TableList = styled(TableListContainer)`
	display: flex;
	text-align: center;
	margin: 60px auto;
	max-width: 80%;

	.task {
		min-width: 150px;
	}

	.deadline {
		min-width: 150px;
	}

	.done {
		min-width: 100px;
	}
	.comment {
		min-width: 450px;
	}
	.image {
		min-width: 110px;
	}
`;
