const userReducer = (state = [], action) => {
    if(action.type === "GET_USER_INFO"){
        return [...state, action.payload];
    }
    else{
        return state;
    }
};

export default userReducer;