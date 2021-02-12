import React, { useContext, useEffect } from 'react'
import NewsEach from './NewsEach'
import AdminContext from '../../context/admin/adminContext'

const NewsList = () => {
    const { items, getNews } = useContext(AdminContext)
    
    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            {
                items.map((newsEach) => (
                    <NewsEach key={newsEach._id} newsEach={newsEach} />
                ))
            }
        </>
    )
}

export default NewsList