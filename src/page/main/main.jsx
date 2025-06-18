import styled from "styled-components"
import { ROLE } from "../../constant";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { Enter, MainTodo } from "./components";

const MainContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole)

	return <div className={className}>
		{roleId === ROLE.GUEST ? (
			<Enter/>
		) : (
			<MainTodo/>
		)}
	</div>;
};

export const Main = styled(MainContainer)`

`
