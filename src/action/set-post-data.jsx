import { ACTION_TYPE } from "./action-type"

export const setTodoData = (postData) => ({
	type: ACTION_TYPE.SET_TODOS,
	payload: postData,
});
