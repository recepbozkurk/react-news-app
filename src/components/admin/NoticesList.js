import React, { useContext, useEffect } from 'react'
import NoticeEach from './NoticeEach'
import AdminContext from '../../context/admin/adminContext'

const NoticesList = () => {
    const {notices, getNotices} = useContext(AdminContext)

    useEffect(() => {
        getNotices()
    }, [])
    
    return (
        <>
            {
                notices.map((noticeEach) => (
                    <NoticeEach key={noticeEach._id} noticeEach={noticeEach} />
                ))
            }
        </>
    )
}

export default NoticesList