import React, { useState } from "react";

const Registration = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    phoneNumber: "",
    address: "",
  });
  const title = props.name == "edit" ? "Edit Profile" : "Registration";
  const titleButton = props.name == "edit" ? "Edit" : "Register";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your registration logic here (e.g., send data to an API)
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Role</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="userRole"
                value="user"
                checked={formData.role === "user"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="userRole">
                User
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="employeeRole"
                value="Employee"
                checked={formData.role === "Employee"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="employeeRole">
                Employee
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Profile Photo</label>
          <br></br>
          <input
            type="file"
            className="form-control-file mt-2"
            id="photo"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {titleButton}
        </button>
      </form>
    </div>
  );
};

export default Registration;
