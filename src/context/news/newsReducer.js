const NewsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                news: action.payload
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.payload
            }
        case 'SET_NAVBAR':
            return {
                ...state,
                navbar: action.payload
            }
        default:
            return state
    }
}

export default NewsReducer