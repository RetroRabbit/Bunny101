import React from 'react';
import { Route, Link } from 'react-router-dom'
import Login from '../login'
import Register from '../register'

const App = () => (
    <div>
        <main>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </main>
    </div>
)

export default App;