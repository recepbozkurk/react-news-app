import React, { useReducer } from "react"
import NewsContext from "./newsContext"
import NewsReducer from './newsReducer'
import axios from 'axios'

const NewsState = (props) => {
    const initialState = {
        news: [],
        item: {},
        loading: false,
        navbar: {}
    }

    const [state, dispatch] = useReducer(NewsReducer, initialState)

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

    const setItem = (title, content, newsDate) => {
        dispatch({
            type: 'SET_ITEM',
            payload: { title, content, newsDate }
        })
    }

    const setNav = (color, icon, title, navitem) => {
        dispatch({
            type: 'SET_NAVBAR',
            payload: { color, icon, title, navitem }
        })
    }

    return <NewsContext.Provider
        value={{
            news: state.news,
            item: state.item,
            loading: state.loading,
            navbar: state.navbar,
            getNews,
            setItem,
            setNav
        }}>

        {props.children}
    </NewsContext.Provider>
}

export default NewsState