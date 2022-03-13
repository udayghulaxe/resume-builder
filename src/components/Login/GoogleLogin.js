import React, { Component } from "react";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from "react-redux";
import { signInAction, signOutAction } from '../../reducers/authSlice.js'
import { withRouter } from 'react-router-dom';

class GoogleLogin extends Component {
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
                
                this.onAuthChange(this.auth.isSignedIn.get());
                // listen for auth changes in future
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedInStatus) => {
        if (isSignedInStatus) {
            this.props.signInAction({
                userId: this.auth.currentUser.get().getId(), 
                name: this.auth.currentUser.get().getBasicProfile().getName(), 
                email: this.auth.currentUser.get().getBasicProfile().getEmail()
            });
        } else {
            this.props.signOutAction();
        }
    }

    onSignInClick = () => {
        this.auth.signIn().then(() => {
            this.props.signInAction({
                userId: this.auth.currentUser.get().getId(), 
                name: this.auth.currentUser.get().getBasicProfile().getName(), 
                email: this.auth.currentUser.get().getBasicProfile().getEmail()
            });
            localStorage.setItem('token', this.auth.currentUser.get().getAuthResponse().id_token)
            this.props.history.replace('builder');
        });
    }

    onSignOutClick = () => {
        this.auth.signOut().then(() => {
            localStorage.removeItem('token');
           this.props.signOutAction();
        });
    }

    renderAuthButton()  {
        if (this.props.isSignedIn === null) {
           return (
            <div className="header-login-button-wrap">
                <CircularProgress className="login-loader" size={18} />
            </div>
           );
 
        } else if(this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.authReducer.isSignedIn
    }
}

const mapDispatchToProps = { signInAction, signOutAction };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GoogleLogin));