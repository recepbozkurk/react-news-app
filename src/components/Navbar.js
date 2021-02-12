import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/news/newsContext'

const Navbar = () => {
    const { navbar } = useContext(NewsContext)

    return (
        <nav className={`navbar navbar-expand-sm navbar-dark bg-${navbar.color}`}>
            <div className="container">
                <Link to={navbar.navitem ? "/" : "/admin"} className="navbar-brand">
                    <i className={navbar.icon}></i> {navbar.title}
                </Link>
                {navbar.navitem && (
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/news" className="nav-link">Haberler</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/notices" className="nav-link">Duyurular</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar