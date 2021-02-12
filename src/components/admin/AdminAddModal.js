import React, { useContext, useState } from 'react'
import AdminContext from '../../context/admin/adminContext'

const AdminAddModal = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [newsDate, setNewsDate] = useState("")

    const {addNews} = useContext(AdminContext)

    const addNewsItem = (e) => {
        e.preventDefault()

        addNews(title, content, newsDate)
        setTitle("")
        setContent("")
        setNewsDate("")
    }

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="addModal">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-primary" style={{ color: 'white' }}>
                        <h5 className="modal-title">Haber Ekle</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="news-title">Haber Tarihi</label>
                                <input id="news-date" type="date" className="form-control" onChange={(e) => setNewsDate(e.target.value)} value={newsDate}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="news-title">Haber Başlığı</label>
                                <input id="news-title" type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="news-content">Haber İçeriği</label>
                                <textarea id="news-content" type="text" className="form-control" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                            </div>
                            <div className="float-right">
                                <button className="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                                <button onClick={addNewsItem} type="button" data-dismiss="modal" className="btn btn-primary mx-3">Ekle</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddModal