import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NewsState from '../context/news/newsState'
import AdminState from '../context/admin/adminState'
import Admin from './admin/Admin'
import Home from './home/Home'
import Navbar from './Navbar'
import News from './news/News'
import Notices from './notices/Notices'
import NoticesState from '../context/notices/noticesState'

const App = () => {
    return (
        <NewsState>
            <NoticesState>
                <AdminState>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/news" component={News} />
                            <Route path="/notices" component={Notices} />
                            <Route path="/admin" component={Admin} />
                        </Switch>
                    </BrowserRouter>
                </AdminState>
            </NoticesState>
        </NewsState>
    )
}

export default App