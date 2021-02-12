import React, { useContext } from 'react'
import NewsContext from '../../context/news/newsContext'

const NewsModal = () => {
    const { item } = useContext(NewsContext)

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="exmodal">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-danger" style={{color: 'white'}}>
                        <h5 className="modal-title">{item.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h6>{item.newsDate}</h6>
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsModal