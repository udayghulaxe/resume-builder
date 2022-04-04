import React, { Component } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";
import { signInAction, signOutAction } from "../../reducers/authSlice.js";
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { initialData } from '../../globals.js';

class GoogleLogin extends Component {
  // If not using arrow function then we need to bind `this` like below
  // constructor(props) {
  //     super(props);
  //     this.state = {isSignedIn: null};
  //     this.onAuthChange = this.onAuthChange.bind(this)
  // }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1051932499833-smce802vivdpiijmo5bg4donrr6n40fg.apps.googleusercontent.com",
          scope: "email profile",
        })
        .then(() => {
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
        email: this.auth.currentUser.get().getBasicProfile().getEmail(),
      });
    } else {
      this.props.signOutAction();
    }
  };

  getUniqueId = () => {
    return Math.floor(Math.random() * Date.now())
  }

  onSignInClick = () => {
    this.auth.signIn().then(() => {
      const uniqueId = this.getUniqueId();
      const userId = this.auth.currentUser.get().getId();
      const name = this.auth.currentUser.get().getBasicProfile().getName();
      const email = this.auth.currentUser.get().getBasicProfile().getEmail();
      this.props.signInAction({
        userId: userId,
        name: this.auth.currentUser.get().getBasicProfile().getName(),
        email: this.auth.currentUser.get().getBasicProfile().getEmail(),
      });

      // If first time user then create a new resume
      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then((doc) => {
          // Existing user then redirect else create a new resume
          if (doc.exists) {
            localStorage.setItem(
              "token",
              this.auth.currentUser.get().getAuthResponse().id_token
            );
            this.props.history.replace("builder");
          } else {
            initialData.resumeJson.header.filter(
              (item) => item.name === "BasicInfo"
            )[0].componentData = {
              fullName: name,
              email: email,
              website: "www.example.com",
              phone: "1234567890",
              address: "123, ABC Street, XYZ City, ABC State, 123456",
            };
            firebase
              .firestore()
              .collection("resumes")
              .doc(`${uniqueId}`)
              .set({
                resumeJson: JSON.stringify(initialData.resumeJson),
                resumeSettings: JSON.stringify(initialData.resumeSettings)
            });
            firebase
              .firestore()
              .collection("users")
              .doc(`${userId}`)
              .set({
                userResumes: JSON.stringify([uniqueId]),
                userId: userId,
                name: name,
                email: email,
              })
              .then(() => {
                localStorage.setItem(
                  "token",
                  this.auth.currentUser.get().getAuthResponse().id_token
                );
                this.props.history.replace(`builder/${uniqueId}`);
              });
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    });
  };

  onSignOutClick = () => {
    this.auth.signOut().then(() => {
      localStorage.removeItem("token");
      this.props.signOutAction();
    });
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <div className="header-login-button-wrap">
          <CircularProgress className="login-loader" size={18} />
        </div>
      );
    } else if (this.props.isSignedIn) {
      return (
        <Button
          onClick={this.onSignOutClick}
          variant="contained"
          color="primary"
          disableElevation
          className="header-login-button"
        >
          Logout
        </Button>
      );
    } else {
      return (
        <Button
          onClick={this.onSignInClick}
          variant="contained"
          color="primary"
          disableElevation
          className="header-login-button"
        >
          Create Resume
        </Button>
      );
    }
  }

  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authReducer.isSignedIn,
  };
};

const mapDispatchToProps = { signInAction, signOutAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GoogleLogin));
