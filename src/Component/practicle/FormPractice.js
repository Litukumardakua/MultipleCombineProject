import React, { useState } from "react";
import Model from "react-modal";

const FormPractice = () => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModelIsOpen(true)}>form model</button>
      <Model isOpen={modelIsOpen}>
        <form>
          <div class="form-group">
            <label>userName</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </Model>
    </div>
  );
};

export default FormPractice;
