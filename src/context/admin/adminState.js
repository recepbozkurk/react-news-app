import React, { useReducer } from "react"
import AdminContext from "./adminContext"
import AdminReducer from './adminReducer'
import axios from 'axios'

const AdminState = (props) => {
    const initialState = {
        items: [],
        item: {},
        notices: [],
        notice: {},
        loading: false
    }

    const [state, dispatch] = useReducer(AdminReducer, initialState)

    //News Tab
    const getNews = () => {
        axios
            .get("http://localhost:7070/news/GetNews")
            .then(res => {
                dispatch({
                    type: 'GET_NEWS',
                    payload: res.data
                })
            })
    }

    const addNews = (title, content, newsDate) => {
        axios
            .post('http://localhost:7070/news/AddNews', {
                title,
                content,
                newsDate
            })
            .then(res => {
                if(res.data.status) getNews()
            })
    }

    const removeNews = (id) => {
        axios
            .post('http://localhost:7070/news/RemoveNews', {
                id
            })
            .then(res => {
                if(res.data.status) getNews()
            })
    }

    const updateNews = (id, title, content, newsDate) => {
        axios
            .post('http://localhost:7070/news/UpdateNews', {
                id,
                title,
                content,
                newsDate
            })
            .then(res => {
                if(res.data.status) getNews()
            })
    }

    const setItem = (id, title, content, newsDate) => {
        dispatch({
            type: 'SET_ITEM',
            payload: {id, title, content, newsDate}
        })
    }

    //Notices Tab
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

    const addNotices = (title, content, noticesDate) => {
        axios
            .post('http://localhost:7070/notices/AddNotices', {
                title,
                content,
                noticesDate
            })
            .then(res => {
                if(res.data.status) getNotices()
            })
    }

    const removeNotices = (id) => {
        axios
            .post('http://localhost:7070/notices/RemoveNotices', {
                id
            })
            .then(res => {
                if(res.data.status) getNotices()
            })
    }

    const updateNotices = (id, title, content, noticesDate) => {
        axios
            .post('http://localhost:7070/notices/UpdateNotices', {
                id,
                title,
                content,
                noticesDate
            })
            .then(res => {
                if(res.data.status) getNotices()
            })
    }

    const setNotice = (id, title, content, noticesDate) => {
        dispatch({
            type: 'SET_NOTICE',
            payload: {id, title, content, noticesDate}
        })
    }

    return <AdminContext.Provider
        value={{
            items: state.items,
            item: state.item,
            notices: state.notices,
            notice: state.notice,
            loading: state.loading,
            getNews,
            addNews,
            updateNews,
            removeNews,
            setItem,
            getNotices,
            addNotices,
            updateNotices,
            removeNotices,
            setNotice
        }}>

        {props.children}
    </AdminContext.Provider>
}

export default AdminState