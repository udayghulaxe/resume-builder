import React, { Component } from "react";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


class GoogleLogin extends Component {
    state = {isSignedIn: null};
    // constructor(props) {
    //     super(props);
        
    //     this.onAuthChange = this.onAuthChange.bind(this)
    // }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1051932499833-smce802vivdpiijmo5bg4donrr6n40fg.apps.googleusercontent.com',
                scope: 'email profile',
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton()  {
        if (this.state.isSignedIn === null) {
           return  <CircularProgress className="login-loader" size={18} />;
 
        } else if(this.state.isSignedIn) {
            return <Button 
                variant="contained"
                color="primary" 
                disableElevation
                className="header-login-button">
                    DashBoard
            </Button>
        } else {
            return <Button 
                variant="contained"
                color="primary" 
                disableElevation
                className="header-login-button">
                    Create Resume
            </Button>
        }
    }

    render() {
        return this.renderAuthButton();
    }
};

export default GoogleLogin;