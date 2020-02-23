import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormFields from "../../ui/formFields";
import { validate } from "../../ui/misc";

import { firebasePromotions } from "../../../firebase";

class Enroll extends Component {
  // config for email input
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
      }
    }
  };

  // Reset the form after successful submission
  resetFormSuccess(type) {
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = "";
      newFormdata[key].valid = false;
      newFormdata[key].validationMessage = "";
    }

    this.setState({
      formError: false,
      formdata: newFormdata,
      formSuccess: type ? "Congratulations" : "Already on database"
    });

    this.clearSuccessMessage();
  }

  clearSuccessMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: ""
      });
    }, 2000);
  }

  // On submitting the form
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
      // ======= Insert into firebase DB: Start ======
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit); // insert to firebase db
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false); // already exist case
          }
        });
      // ======= Insert into firebase DB: End ======

      // this.resetFormSuccess();
      //   console.log(dataToSubmit);
    } else {
      this.setState({
        formError: true
      });
    }
  }

  // when we type in React Input
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
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormFields
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  Something is wrong, try again.
                </div>
              ) : null}

              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={event => this.submitForm(event)}>Enroll</button>
              <div className="enroll_disclaimer">
                Umbro designs, sources, and markets football-related apparel,
                footwear, and equipment. Its products are sold in over 90
                countries worldwide.
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
