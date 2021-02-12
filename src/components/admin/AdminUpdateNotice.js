import React, { useContext, useState, useEffect } from 'react'
import AdminContext from '../../context/admin/adminContext'

const AdminUpdateNotice = () => {
    const { notice, updateNotices } = useContext(AdminContext)

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [noticesDate, setNoticesDate] = useState("")

    useEffect(() => {
        setId(notice.id)
        setTitle(notice.title)
        setContent(notice.content)
        setNoticesDate(notice.noticesDate)
    }, [notice])

    const updateNoticesItem = (e) => {
        e.preventDefault()

        updateNotices(id, title, content, noticesDate)
    }

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="updateNotice">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-warning" style={{ color: 'white' }}>
                        <h5 className="modal-title">Duyuru Güncelle</h5>
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
                            <div className="float-right">
                                <button className="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                                <button type="button" className="btn btn-warning mx-3" data-dismiss="modal" onClick={updateNoticesItem}>Güncelle</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUpdateNotice