import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../../login'
import Register from '../../register'

import './index.css'

const Account_Screen = () => (
<div class="chatbox">
    <div className="incoming">
        <div class="received-message-box">
            <p class="message-text">Without a doubt there is something very relaxing and pleasurable about cooking
            and eating grilled food. To reduce the risks follow these basic tips: 
            Without a doubt there is something very relaxing and pleasurable about cooking 
            and eating grilled food. To reduce the risks follow these basic tips:
            </p>
         </div>
        <p class="received-time">07H00</p>
    </div>
    <div className="outgoing">
        <div class="sent-message-box">
            <p class="message-text">Without a doubt there is something very 
            relaxing and pleasurable about cooking and eating grilled food.
            To reduce the risks follow these basic tips:
            Without a doubt there is something very 
            relaxing and pleasurable about cooking and eating grilled food.
            To reduce the risks follow these basic tips:
            </p>
        </div>
        <p class="sent-time">07H00</p>
    </div>    
</div>       
)

export default Account_Screen;