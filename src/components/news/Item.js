import React, { useContext, useEffect, useState } from 'react'
import NewsContext from '../../context/news/newsContext'
import dNews from '../../images/default-news.jpg'

const Item = (props) => {
    const [title, setTitle] = useState(props.item.title)
    const [content, setContent] = useState(props.item.content)
    const [newsDate, setNewsDate] = useState(props.item.newsDate)

    const { setItem } = useContext(NewsContext)

    const changeItem = () => {
        setItem(title, content, newsDate)
    }

    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card my-2" onClick={changeItem} data-toggle="modal" data-target="#exmodal">
                    <img src={`/${dNews}`} className="img-fluid" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <h5 className="card-title">{props.item.title}</h5>
                            </div>
                            <div className="col-md-4">
                                <small className="float-right"><i>{props.item.newsDate}</i></small>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Item