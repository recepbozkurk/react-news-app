import React, { useState, useContext, useEffect } from 'react'
import NewsContext from '../../context/news/newsContext'
import NewsList from './NewsList'
import NoticesList from './NoticesList'
import AdminAddModal from './AdminAddModal'
import AdminUpdateModal from './AdminUpdateModal'
import AdminRemoveModal from './AdminRemoveModal'
import AdminNoticeModal from './AdminAddNotice'
import AdminUpdateNotice from './AdminUpdateNotice'
import AdminRemoveNotice from './AdminRemoveNotice'

const Admin = () => {
    const [navbar, setNavbar] = useState({ color: "primary", icon: "fab fa-autoprefixer", title: "Admin Panel", navitem: false })
    const { setNav } = useContext(NewsContext)

    useEffect(() => {
        setNav(navbar.color, navbar.icon, navbar.title, navbar.navitem)
    }, [])

    return (
        <div className="container p-5">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#news" role="tab" aria-controls="home" aria-selected="true"><b>Haberler</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#notices" role="tab" aria-controls="profile" aria-selected="false"><b>Duyurular</b></a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="news" role="tabpanel" aria-labelledby="news-tab">
                    <button className="btn btn-sm btn-primary my-3" data-toggle="modal" data-target="#addModal">Haber Ekle</button>
                    <table className="table table-striped">
                        <tbody>
                            <NewsList />
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="notices" role="tabpanel" aria-labelledby="notices-tab">
                    <button className="btn btn-sm btn-warning my-3" data-toggle="modal" data-target="#addNotice" style={{ color: 'white' }}>Duyuru Ekle</button>
                    <table className="table table-striped">
                        <tbody>
                            <NoticesList />
                        </tbody>
                    </table>
                </div>
            </div>

            <AdminAddModal />
            <AdminUpdateModal />
            <AdminRemoveModal />
            <AdminNoticeModal />
            <AdminUpdateNotice />
            <AdminRemoveNotice />
        </div>
    )
}

export default Admin
