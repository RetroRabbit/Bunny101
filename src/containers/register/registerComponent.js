import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const RegisterComponent = () => (

    <div >

              <div class="registerForm">
              <p class="step-one">Step One</p>
              <p class="the-basics">Step The basics</p>
  
              <RaisedButton label="Default" />

              <form>
              <label> Email
                  <input type="text" class="form-field-white" />
              </label>
  
              <label>Password
                  <input type="text"  />
              </label>
          
              <input class="rectangleButton" type="submit" value="Submit" />
  
              
            </form>
          </div>


  </div>
);

export default RegisterComponent;