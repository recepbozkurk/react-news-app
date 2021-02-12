import React, { useContext, useEffect, useState } from 'react'
import Notice from './Notice'
import NoticesContext from '../../context/notices/noticesContext'
import socketIOClient from "socket.io-client";

const Notices = () => {
    const { notices, getNotices, setNoticesLive } = useContext(NoticesContext)

    const socket = socketIOClient('http://localhost:6060')

    socket.on('getNotice', (arg) => {
        setNoticesLive(arg)
    }) 

    useEffect(() => {
        getNotices()
    }, [])

    return (
        <div className="container my-3">
            {
                notices.map((notice) => {
                    return (
                        <Notice key={notice._id} notice={notice} />
                    )
                })
            }
        </div>
    )
}

export default Notices