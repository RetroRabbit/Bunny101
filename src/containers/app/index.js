import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Body from '../body'
import Header from '../header'
import Sidebar from '../sidebar'
import Chat from '../chat'
import Register_Step2 from '../register_step2'

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/body" component={Body} />
            <Route exact path="/header" component={Header} />
            <Route exact path="/sidebar" component={Sidebar} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/register_step2" component={Register_Step2} />
        </main>
    </div>
)

export default App;