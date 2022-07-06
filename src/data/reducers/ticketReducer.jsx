const ticketReducer = (state = [], action) => {
	if (action.type === "SEARCH_RESULT") {
		return [...state, action.payload];
	}
	else if (action.type === "TICKET_RECEIPT"){
		return [...state, action.payload];
	} 
	else {
		return state;
	}
};

export default ticketReducer;
