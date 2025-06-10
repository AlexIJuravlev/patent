import styled from 'styled-components';
import { Link } from 'react-router';

const BarContainer = ({ className }) => {
	return (
		<div className={className}>
			<Link to='/'>Главная</Link>
			<Link to='/todo/:id/edit'>Создать задачу</Link>
			<Link>Найти задачу</Link>
			<Link>Добавить сотрудника</Link>
		</div>
	);
};

export const Bar = styled(BarContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 30%;
	margin: 0 0 0 60px;

	a {
		position: relative;
		text-decoration: none;
		color: white;
		display: flex;
		justify-content: space-between;
		padding: 0 5px;
	}

	a:after,
	a:before {
		content: '';
		position: absolute;
		bottom: -5px;
		width: 0;
		height: 1px;
		transition: width 0.2s ease;
		background-color: white;
	}

	a:before {
		left: 50%;
	}

	a:after {
		right: 50%;
	}

	a:hover:before,a:hover:after{
		width: 50%;
	};
`;
