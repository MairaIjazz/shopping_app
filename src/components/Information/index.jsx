import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Information = (props) => {
  // The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument
  const EmailInputRef = useRef();
  const CountryInputRef = useRef();
  const FirstNameInputRef = useRef();
  const LastNameInputRef = useRef();
  const CityInputRef = useRef();
  const PhoneNumberInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = EmailInputRef.current.value;
    const enteredCountry = CountryInputRef.current.value;
    const enteredFirstName = FirstNameInputRef.current.value;
    const enteredLastName = LastNameInputRef.current.value;
    const enteredCity = CityInputRef.current.value;
    const enteredPhoneNumber = PhoneNumberInputRef.current.value;

    const personalData = {
      email: enteredEmail,
      country: enteredCountry,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      city: enteredCity,
      phoneNumber: enteredPhoneNumber,
    };

    props.onPersonalData(personalData);
  }
  return (
    <div>
      <Link to="/" className="navbar-logo2">
        <i className="fas fa-gifts"></i>
        SHOPPING
      </Link>
      <div>
        {" "}
        <h1 className="Info-heading">Personal Information</h1>
      </div>

      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="Email">Email</label>
          <input type="text" required id="text" ref={EmailInputRef} />
        </div>
        <div className="control">
          <label htmlFor="Country">Country</label>
          <input type="text" required id="text" ref={CountryInputRef} />
        </div>
        <div className="control">
          <label htmlFor="FirstName">FirstName</label>
          <input type="text" required id="text" ref={FirstNameInputRef} />
        </div>
        <div className="control">
          <label htmlFor="LastName">LastName</label>
          <input type="text" required id="text" ref={LastNameInputRef} />
        </div>
        <div className="control">
          <label htmlFor="City">City</label>
          <input type="text" required id="text" ref={CityInputRef} />
        </div>
        <div className="control">
          <label htmlFor="PhoneNumber">PhoneNumber</label>
          <input
            type="integers"
            required
            id="integers"
            ref={PhoneNumberInputRef}
          />
        </div>
        <div className="actions">
          <button className="meetbtn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Information;
