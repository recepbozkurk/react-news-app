import React, { useContext, useState, useEffect } from 'react'
import AdminContext from '../../context/admin/adminContext'

const AdminUpdateModal = () => {
    const { item, updateNews } = useContext(AdminContext)

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [newsDate, setNewsDate] = useState("")

    useEffect(() => {
        setId(item.id)
        setTitle(item.title)
        setContent(item.content)
        setNewsDate(item.newsDate)
    }, [item])

    const updateNewsItem = (e) => {
        console.log("Update id: ", item)
        e.preventDefault()

        updateNews(id, title, content, newsDate)
    }

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="adminModal">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-primary" style={{ color: 'white' }}>
                        <h5 className="modal-title">Haber Güncelle</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="news-title">Haber Tarihi</label>
                                <input id="news-date" type="date" className="form-control" onChange={(e) => setNewsDate(e.target.value)} value={newsDate} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="news-title">Haber Başlığı</label>
                                <input id="news-title" type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="news-content">Haber İçeriği</label>
                                <textarea id="news-content" type="text" className="form-control" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                            </div>
                            <div className="float-right">
                                <button className="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                                <button type="button" className="btn btn-primary mx-3" data-dismiss="modal" onClick={updateNewsItem}>Güncelle</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUpdateModal