import React, { useState } from "react";
import Model from "react-modal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

         const { username, email,password } = inputValue;
     if (username == "") {
       toast.error("username is require")
     } else if (email == "") {
       toast.error("email is require")
     } else if (!email.includes("@")) {
       toast.error("invalid email")
     } else if (password == "") {
       toast.error("password is require")
     } else {
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
     }
  };

  return (
    <div>
      <button onClick={() => setModelIsOpen(true)}>Open Form</button>
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
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">UserName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {submittedValues.map((value, index) => (
                  <tr key={index}>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPractice;
