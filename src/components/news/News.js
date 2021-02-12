import React, { useContext, useEffect } from 'react'
import NewsContext from '../../context/news/newsContext'
import Item from './Item'
import NewsModal from './NewsModal'

const News = () => {
    const { news, getNews } = useContext(NewsContext)

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className="container mt-3">
            <div className="row">
                {
                    news.map((item) => {
                        return (
                            <Item key={item.id} item={item} />
                        )
                    })
                }
            </div>
            <NewsModal />
        </div>
    )
}

export default News