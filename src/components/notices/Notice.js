import React, { useEffect, useState } from 'react'
import nt1 from '../../images/notice-1.png'

const Notice = (props) => {
    const [title, setTitle] = useState(props.notice.title)
    const [content, setContent] = useState(props.notice.content)
    const [noticesDate, setNoticesDate] = useState(props.notice.noticesDate)

    return (
        <>
            <div className="card my-2">
                <div className="row">
                    <div className="col-5">
                        <img src={`/${nt1}`} className="img-fluid p-0" style={{ height: '200px', width: '400px' }} />
                    </div>
                    <div className="col-7">
                        <div className="card-body p-0 my-3 mr-2">
                            <h6 className="float-right mb-5">{noticesDate}</h6>
                            <h3>{title}</h3>
                            <p className="card-text">{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice
