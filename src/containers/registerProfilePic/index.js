import React from 'react'
import { Route, Link} from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Register from '../register'
import Body from '../body'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import "./index.css"

class ProfilePic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: '', showing: true};
    }
    
    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                showing: !this.state.showing
            });
        }
    
        reader.readAsDataURL(file)
    }

    render() {

        let {showing} = this.state;
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} id="profileImg" width="236px" height="236px" />);         
        } else {
            $imagePreview = (<div className="previewText"></div>);
        }

        return (
            <div class="registerForms">
                <div class="heading1">
                    <p class="stepTwo">Step Two</p>  
                    <p class="profilePicture">PROFILE PICTURE</p>     
                
                    <div class="theForm1">
                        <form onSubmit={this.props.changeToRegisterFirstChat}>
                            <MuiThemeProvider>
                                <div class="profileCircle">                                                                   
                                    <input id="f02" class="btnProfilePic" type="file" placeholder="+" onChange={(e)=>this.handleImageChange(e)}/>
                                    <div id="alignMiddle" style={{ display: (showing ? 'block' : 'none') }}>
                                        <label class="plus" for="f02"><p class="ThePlusSign">+</p></label>                                       
                                    </div>
                                    <div className="imgPreview">
                                        {$imagePreview}
                                    </div>
                                </div>
                                <div class="skipForNowContainer">
                                    <button type="submit" class="btnNextStep">NEXT STEP</button> 
                                    <p onClick={this.props.changeToRegisterFirstChat} class="skipForNow">Skip for now</p>
                                </div>
                            </MuiThemeProvider>
                        </form> 
                    </div>           
                </div>    
            </div>
        );
    }
}

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToRegisterFirstChat: () => push('/registerFirstChat')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePic)