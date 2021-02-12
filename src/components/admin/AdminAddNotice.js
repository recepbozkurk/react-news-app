import React, { useContext, useState } from 'react'
import AdminContext from '../../context/admin/adminContext'
import socketIOClient from "socket.io-client";

const AdminNoticeModal = () => {
    const socket = socketIOClient('http://localhost:6060')

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [noticesDate, setNoticesDate] = useState("")

    const { addNotices } = useContext(AdminContext)

    const addNoticesItem = (e) => {
        e.preventDefault()

        addNotices(title, content, noticesDate)
        socket.emit('addNotice')

        setTitle("")
        setContent("")
        setNoticesDate("")
    }

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="addNotice">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-warning" style={{ color: 'white' }}>
                        <h5 className="modal-title">Duyuru Ekle</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="news-title">Duyuru Tarihi</label>
                                <input id="news-date" type="date" className="form-control" onChange={(e) => setNoticesDate(e.target.value)} value={noticesDate} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="news-title">Duyuru Başlığı</label>
                                <input id="news-title" type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="news-content">Duyuru İçeriği</label>
                                <textarea id="news-content" type="text" className="form-control" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="notice-file">Duyuru Görseli</label>
                                <input type="file" className="form-control-file" id="notice-file" disabled/>
                            </div>
                            <div className="float-right">
                                <button className="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                                <button onClick={addNoticesItem} type="button" data-dismiss="modal" className="btn btn-warning mx-3">Ekle</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNoticeModal