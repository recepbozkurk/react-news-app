const AdminReducer = (state, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                items: action.payload
            }
        case 'GET_NOTICES':
            return {
                ...state,
                notices: action.payload
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.payload
            }
        case 'SET_NOTICE':
            return {
                ...state,
                notice: action.payload
            }
        default:
            return state
    }
}

export default AdminReducer