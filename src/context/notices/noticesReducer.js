const NoticesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_NOTICES':
            return {
                ...state,
                notices: action.payload
            }
        case 'SET_NOTICE':
            return {
                ...state,
                notice: action.payload
            }
        case 'SET_NOTICES_LIVE':
            return {
                ...state,
                notices: action.payload
            }
        default:
            return state
    }
}

export default NoticesReducer