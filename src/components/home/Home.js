import React, { useState, useContext, useEffect } from 'react'
import NewsContext from '../../context/news/newsContext'

const Home = () => {
    const [navbar, setNavbar] = useState({ color: "danger", icon: "fab fa-dochub", title: "Dernek", navitem: true })
    const { setNav } = useContext(NewsContext)

    useEffect(() => {
        setNav(navbar.color, navbar.icon, navbar.title, navbar.navitem)
    }, [])

    return (
        <div className="container p-5">
            <h1 style={{textAlign: 'center'}}>Dernek Sayfamıza Hoşgeldiniz!</h1>
        </div>
    )
}

export default Home
