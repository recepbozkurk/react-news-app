import React, { useContext, useState, useEffect } from 'react'
import AdminContext from '../../context/admin/adminContext'

const NoticeEach = ({ noticeEach }) => {
    const [title, setTitle] = useState(noticeEach.title)
    const [content, setContent] = useState(noticeEach.content)
    const [noticesDate, setNoticesDate] = useState(noticeEach.noticesDate)
    const [id, setId] = useState(noticeEach._id)

    const { setNotice } = useContext(AdminContext)

    const changeItem = () => {
        setNotice(id, title, content, noticesDate)
    }

    useEffect(() => {
        setId(noticeEach._id)
        setTitle(noticeEach.title)
        setContent(noticeEach.content)
        setNoticesDate(noticeEach.noticesDate)
    }, [noticeEach])

    return (
        <tr>
            <td>{noticeEach.title}</td>
            <td style={{ width: "25%" }}>
                <div className="float-right">
                    <button className="btn btn-sm btn-warning" onClick={changeItem} data-toggle="modal" data-target="#updateNotice">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-danger ml-2" onClick={changeItem} data-toggle="modal" data-target="#removeNotice">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default NoticeEach