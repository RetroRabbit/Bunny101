import React from 'react';
import './index.css'

var messages = { 
    "vusi" :[
        {"mesage-type" : "received", "message":" without a message"},
        {"mesage-type" : "received", "message":"My second message"}
    ]  
}

const Account_Screen = () => (
<div class="chatbox">
    <div className="user-msg">
        <div class="sent-message-box">
            <p class="message-text">Without a doubt there is.
            </p>
            <p class="sent-time">07H00</p>
        </div>
    </div>

    <div className="user-msg">
        <div class="received-message-box">
            <p class="message-text">Without a doubt there is something very relaxing 
            </p>
            <p class="received-time">07H00</p>
         </div>  
    </div>

    <div className="user-msg">
        <div class="sent-message-box">
            <p class="message-text">Without a doubt there is.
            </p>
            <p class="sent-time">07H00</p>
        </div>
    </div>

    <div className="user-msg">
        <div class="received-message-box">
            <p class="message-text">{messages.vusi[1].message}
            </p>
            <p class="received-time">07H00</p>
         </div>  
    </div>

    <div className="user-msg">
        <div class="sent-message-box">
            <p class="message-text">Without a doubt there is something very relaxing and pleasurable about cooking
            and eating grilled food. To reduce the risks follow these basic tips: 
            Without a doubt there is something very relaxing and pleasurable about cooking 
            and eating grilled food. To reduce the risks follow these basic tips:
            </p>
            <p class="sent-time">07H00</p>
        </div>     
    </div>    
</div>       
)



export default Account_Screen;