import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../register';
import Header from '../header';
import Sidebar from '../sidebar';
import Chat from '../chat';

const Body = props => (
    <div>
        <div class="header">
            <Header />
        </div>

        <div class="chat">
            <Chat />

            <div class="sidebar">
                <Sidebar />
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
