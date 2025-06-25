import styled from 'styled-components';

const LogoNameContainer = ({ className, children }) => {
	return <div className={className}>{children.charAt(0)}</div>;
};

export const LogoName = styled(LogoNameContainer)`
	width: 10px;
	height: 10px;
	border: 1px solid #563de4;
	border-radius: 50%;
	padding: 10px;
	font-size: 20px;
	font-weight: bold;
	background-color: #563de4;
	color: white;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 10px 0 0;
`;
