import React, { useReducer } from "react"
import NoticesContext from "./noticesContext"
import NoticesReducer from './noticesReducer'
import axios from 'axios'

const NoticesState = (props) => {
    const initialState = {
        notices: [],
        notice: {},
        loading: false
    }

    const [state, dispatch] = useReducer(NoticesReducer, initialState)

    const getNotices = () => {
        axios
            .get("http://localhost:7070/notices/GetNotices")
            .then(res => {
                dispatch({
                    type: 'GET_NOTICES',
                    payload: res.data
                })
            })
    }

    const setNotice = (title, content, noticesDate) => {
        dispatch({
            type: 'SET_NOTICE',
            payload: { title, content, noticesDate }
        })
    }

    const setNoticesLive = (arg) => {
        dispatch({
            type: 'SET_NOTICES_LIVE',
            payload: arg
        })
    }

    return <NoticesContext.Provider
        value={{
            notices: state.notices,
            notice: state.notice,
            loading: state.loading,
            getNotices,
            setNotice,
            setNoticesLive
        }}>

        {props.children}
    </NoticesContext.Provider>
}

export default NoticesState