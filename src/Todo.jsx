import { Route, Routes } from "react-router";
import styled from "styled-components";
import { Header } from "./components";
import { Authoriation } from "./page";

const App = styled.div`
	display: flex;
	background-color: white;
`
const Page = styled.div`
	padding: 50px 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1200px;
	min-height: 100%;
	margin: 0 auto;
	background-color: white;
`;

export const Todo = () => {
	return (
		<App>
			<Header/>
			<Page>
				<Routes>
					<Route path='/' element={<div>Главная</div>} />
					<Route path='/login' element={<Authoriation/>} />
					<Route path='/register' element={<div>Регистрация</div>} />
					<Route path='/enter' element={<div>Вход</div>} />
					<Route path='/todo' element={<div>Страница задач</div>} />
					<Route path='/todo/:id/edit' element={<div>Новая задачи</div>} />
					<Route path='/admin' element={<div>Админ панель</div>} />
					<Route path='*' element={<div>Страница ошибки</div>} />
				</Routes>
			</Page>
			{/* <Footer /> */}
		</App>
	);
};

