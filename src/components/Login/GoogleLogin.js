import React, { Component } from "react";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from "react-redux";
import { signInAction, signOutAction } from '../../reducers/authReducer.js'
//import { useSelector, useDispatch } from 'react-redux';


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
        // var user = this.auth.currentUser.get();
        // console.dir(user.getAuthResponse().id_token);
        // console.dir(user.getBasicProfile());
        console.dir(isSignedInStatus);
        console.dir(this.props);
        if (isSignedInStatus) {
            this.props.signInAction();
        } else {
            this.props.signOutAction();
        }
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
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
        isSignedIn: state.authReduce.isSignedIn
    }
}

// const mapDispatchToProps = (dispatch) => ({ 
//     signInAction, 
//     signOutAction
// });

const mapDispatchToProps = { signInAction, signOutAction };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleLogin);