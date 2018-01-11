import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../header'
import Sidebar from '../sidebar'

import './index.css'

const Body = props => (
    <div id="mainComponent">
        <div class="header">
            <Header />
        </div>
        <div class="main-body">
            <div class="sidebar">
                <Sidebar />
            </div>
            <div class="chat">

            </div>
        </div>
    </div>
);

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/register')
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Body);
