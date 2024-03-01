import React, { useState } from "react";
import Model from "react-modal";

const FormPractice = () => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    username:"",
    email:"",
    password:""
  });
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmittedValue = { ...inputValue };
    setSubmittedValues((prevSubmittedValues) => [
      ...prevSubmittedValues,
      newSubmittedValue
    ]);
    setInputValue({
      username:"",
      email:"",
      password:""
    });
    setModelIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModelIsOpen(true)}>form model</button>
      <Model isOpen={modelIsOpen} onRequestClose={() => setModelIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={inputValue.username}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputValue.email}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={inputValue.password}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Model>

      {submittedValues.length > 0 && (
        <div>
          <h2>Submitted values:</h2>
          {submittedValues.map((value, index) => (
            <div key={index}>
              <p>UserName: {value.username}</p>
              <p>Email: {value.email}</p>
              <p>Password: {value.password}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormPractice;
