import React, { Component } from "react";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


class GoogleLogin extends Component {
    state = {isSignedIn: null};

    // If not using arrow function then we need to bind `this` like below
    // constructor(props) {
    //     super(props);
    //     this.state = {isSignedIn: null};
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

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton()  {
        if (this.state.isSignedIn === null) {
           return (
            <div className="header-login-button-wrap">
                <CircularProgress className="login-loader" size={18} />
            </div>
           );
 
        } else if(this.state.isSignedIn) {
            return <Button
                onClick={this.onSignOutClick}
                variant="contained"
                color="primary" 
                disableElevation
                className="header-login-button">
                    Logout
            </Button>
        } else {
            return <Button
                onClick={this.onSignInClick}
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