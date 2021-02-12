import React, { useContext, useState, useEffect } from 'react'
import AdminContext from '../../context/admin/adminContext'

const NewsEach = ({ newsEach }) => {
    const [title, setTitle] = useState(newsEach.title)
    const [content, setContent] = useState(newsEach.content)
    const [newsDate, setNewsDate] = useState(newsEach.newsDate)
    const [id, setId] = useState(newsEach._id)

    const { setItem } = useContext(AdminContext)

    const changeItem = () => {
        setItem(id, title, content, newsDate)
    }

    useEffect(() => {
        setId(newsEach._id)
        setTitle(newsEach.title)
        setContent(newsEach.content)
        setNewsDate(newsEach.newsDate)
    }, [newsEach])

    return (
        <tr>
            <td>{newsEach.title}</td>
            <td style={{ width: "25%" }}>
                <div className="float-right">
                    <button className="btn btn-sm btn-primary" onClick={changeItem} data-toggle="modal" data-target="#adminModal">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-danger ml-2" onClick={changeItem} data-toggle="modal" data-target="#removeModal">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default NewsEach