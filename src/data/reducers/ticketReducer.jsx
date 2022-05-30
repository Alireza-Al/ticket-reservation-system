const ticketReducer = (state = [], action) => {
	if (action.type === "SEARCH_RESULT") {
		return [...state, action.payload];
	} else {
		return state;
	}
};

export default ticketReducer;
