"use client";

import { useReducer } from "react";

const initialForm = {
  fields: {
    name: "",
    email: "",
    cgu: false,
  },
  submitting: false,
  success: false,
  error: null,
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_SUBMITTING":
      return { ...state, submitting: payload };
    case "SET_SUCCESS":
      return { ...state, success: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    case "SET_FIELD":
      return {
        ...state,
        fields: { ...state.fields, [payload.key]: payload.value },
      };
  }
};

export default function App() {
  // Gérer l'état du formulaire avec useState puis refacto avec useReducer
  const [form, dispatch] = useReducer(formReducer, initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_SUBMITTING", payload: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: "SET_SUCCESS", payload: true });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    } finally {
      dispatch({ type: "SET_SUBMITTING", payload: false });
    }
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => {
              dispatch({
                type: "SET_FIELD",
                payload: { key: e.target.name, value: e.target.value },
              });
            }}
            value={form.fields.name}
            required
            placeholder="Your name"
          />
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) => {
              dispatch({
                type: "SET_FIELD",
                payload: { key: e.target.name, value: e.target.value },
              });
            }}
            value={form.fields.email}
            autoComplete="email"
            required
            placeholder="Email Address"
          />
          <button type="submit">Submit</button>
        </div>
        <div>
          <label htmlFor="cgu">CGU</label>
          <input
            id="cgu"
            name="cgu"
            type="checkbox"
            onChange={(e) => {
              dispatch({
                type: "SET_FIELD",
                payload: { key: e.target.name, value: e.target.checked },
              });
            }}
            checked={form.fields.cgu}
          />
          <p>I agree to everything.</p>
        </div>
      </form>
      {form.submitting && <p>Submitting...</p>}
      {form.error && <p>{form.error}</p>}
      {form.success && <p>Success!</p>}
    </div>
  );
}
