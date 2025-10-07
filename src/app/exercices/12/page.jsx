"use client";

import { useReducer } from "react";

const initialState = {
  fields: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  },
  step: 1,
};

const reducer = (state, { action, payload: { key, value } = {} }) => {
  switch (action) {
    case "updateStep":
      return { ...state, step: value };
    case "updateField":
      return { ...state, fields: { ...state.fields, [key]: value } };
    case "reset":
      return initialState;
    default:
      break;
  }
};

export default function MultistepFormReducer() {
  const [{ fields, step }, dispatch] = useReducer(reducer, initialState);

  const handleNextStep = () => {
    dispatch({ action: "updateStep", payload: { value: step + 1 } });
  };

  const handlePrevStep = () => {
    dispatch({ action: "updateStep", payload: { value: step - 1 } });
  };

  const handleChange = (e) => {
    dispatch({
      action: "updateField",
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission");
    dispatch({ action: "reset" });
  };

  if (step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {step} of 3</label>
          <progress value={step} max={3} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Enter your name"
            value={fields.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={fields.email}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="secondary" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (step === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {step} of 3</label>
          <progress value={step} max={3} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            id="address"
            type="address"
            placeholder="What is your address?"
            value={fields.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city"
            id="city"
            placeholder="What city do you live in?"
            value={fields.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={fields.zipcode}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="secondary" type="button" onClick={handleNextStep}>
            Next
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else if (step === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {step} of 3</label>
          <progress value={step} max={3} />
        </div>
        <table>
          <tbody>
            {Object.keys(fields).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{fields[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button className="primary" type="submit">
            Submit
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
