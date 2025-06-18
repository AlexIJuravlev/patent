import styled from 'styled-components';

const TableListContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>Задача</div>
			<div>Срок</div>
			<div>Исполнено</div>
			<div>Коментарий</div>
			<div>Изображение</div>
		</div>
	);
};
export const TableList = styled(TableListContainer)`
	display: flex;
	justify-content: space-between;
	margin: 60px auto;
	max-width: 75%;
`;
