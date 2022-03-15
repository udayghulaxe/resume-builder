import React, { Component } from "react";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from "react-redux";
import { signInAction, signOutAction } from '../../reducers/authSlice.js'
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';

const initialData = {"header":[{"name":"BasicInfo","path":"BasicInfo/BasicInfo"}],"main":[{"name":"Achievements","path":"Achievements/Achievement","componentData":{"title":"Achievements","showIcon":true,"items":[{"title":"Won Best Employee Award for last 2 consecutive year (2020 & 2021). Won Best Employee Award for last 2 consecutive year (2020 & 2021)."},{"title":"Won inter-zone cricket competition (2020). "},{"title":"Runner up for state level table tennis competition (2020)."}]}},{"name":"Experience","path":"Experience/Experience","componentData":{"title":"Experience","items":[{"experienceTitle":"Android Developer","company":"Google","date":"2018 - 2020","location":"New York","experienceSummary":"Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 3 key projects of major clients."},{"experienceTitle":"Front End Developer","company":"Amazon","date":"2014 - 2018","location":"New York","experienceSummary":"Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 4 key projects of major clients."}]}},{"name":"Education","path":"Education/Education","componentData":{"title":"Education","items":[{"title":"Executive MBA, Engineering Management","university":"The University of Arizona","date":"2010 - 2014","gpa":"CGPA 09/10"},{"title":"Engineering Management","university":"The University of California, Berkeley","date":"2008 - 2010","gpa":"CGPA 7.5/10"}]}}],"sidebar":[{"name":"Skills","path":"Skills/Skills","componentData":{"title":"Skills","filled":true,"rounded":false,"items":[{"title":"HTML"},{"title":"CSS"},{"title":"JavaScript"},{"title":"React"}]}},{"name":"Tools","path":"Skills/Skills","componentData":{"title":"Tools","filled":false,"rounded":false,"items":[{"title":"Git"},{"title":"Webpack"},{"title":"Gulp"}]}},{"name":"Hobbies","path":"Skills/Skills","componentData":{"title":"Hobbies","filled":false,"rounded":true,"items":[{"title":"Reading"},{"title":"Swimming"},{"title":"Hiking"}]}},{"name":"Languages","path":"Languages/Languages","componentData":{"title":"Languages","showProficiency":true,"showProficiencyProgress":true,"items":[{"language":"English","proficiency":"Proficient"},{"language":"Hindi","proficiency":"Native"}]}}],"componentLibrary":[]};

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
            const userId = this.auth.currentUser.get().getId();
            const name = this.auth.currentUser.get().getBasicProfile().getName();
            const email = this.auth.currentUser.get().getBasicProfile().getEmail();
            this.props.signInAction({
                userId: userId, 
                name: this.auth.currentUser.get().getBasicProfile().getName(), 
                email: this.auth.currentUser.get().getBasicProfile().getEmail()
            });

            // If first time user then create a new resume
            firebase.firestore().collection('users').doc(userId).get().then((doc) => {
                // Existing user then redirect else create a new resume
                if (doc.exists) {
                    localStorage.setItem('token', this.auth.currentUser.get().getAuthResponse().id_token)
                    this.props.history.replace('builder');
                } else {
                    firebase.firestore().collection("users").doc(userId).set({ 
                        resumeJson: JSON.stringify(initialData),
                        userId: userId, 
                        name: name, 
                        email: email
                    }).then(() => {
                        localStorage.setItem('token', this.auth.currentUser.get().getAuthResponse().id_token)
                        this.props.history.replace('builder');  
                    });
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            
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