import React, { Component } from "react";
import { firebase } from "../../firebase";
import FormFields from "../ui/formFields";
import { validate } from "../ui/misc";

class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          // list of validation to check
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          // list of validation to check
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    // looping through above state to get input values
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].value;
    }

    if (formIsValid) {
      // ========== Checking in firebase for valid email and password for Auth: Start =========
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push("/dashboard");
          // console.log("User is authenticated...");
        })
        .catch(error => {
          this.setState({
            formError: true
          });
        });
      // ========== Checking in firebase for valid email and password for Auth: End =========
    } else {
      this.setState({
        formError: true
      });
    }
  }

  updateForm(element) {
    // We do not directly change formdata state, make a copy of it and update in the end
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    // check for validation
    let validData = validate(newElement);

    // updating state for validation message
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    // console.log(newElement);

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Login</h2>
            <FormFields
              id={"email"}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            <FormFields
              id={"password"}
              formdata={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />

            {/* if we have error */}
            {this.state.formError ? (
              <div className="error_label">Something is wrong, try again.</div>
            ) : null}

            <button onClick={event => this.submitForm(event)}>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
