import { ACTION_TYPE } from "../action";

const initialTodoState = {
	id: '',
	title: '',
	content: '',
	published_at: '',
	deadline: '',
	user_id: '',
	done: false,
	comments: [],
};

export const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_TODOS:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
};
