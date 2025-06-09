import { Route, Routes } from "react-router";
import styled from "styled-components";
import { Header } from "./components";

const App = styled.div`
	display: flex;
	min-height: 100%;
	background-color: white;
`
const Page = styled.div`
	padding: 120px 0 20px;
`

export const Todo = () => {
	return (
		<App>
			<Header />
			<Page>
				<Routes>
					<Route path='/' element={<div>Главная</div>} />
					<Route path='/login' element={<div>Авторизация</div>} />
					<Route path='/register' element={<div>Регистрация</div>} />
					<Route path='/enter' element={<div>Вход</div>} />
					<Route path='/todo' element={<div>Страница задач</div>} />
					<Route path='/todo/:id' element={<div>Новая задачи</div>} />
					<Route path='/admin' element={<div>Админ панель</div>} />
					<Route path='*' element={<div>Страница ошибки</div>} />
				</Routes>
			</Page>
			{/* <Footer /> */}
		</App>
	);
};

