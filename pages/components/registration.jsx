import React, { useState } from "react";
import {
  postDataEmployee,
  editDataEmployee,
  getEmployeeManagementById,
} from "../../services/employee-management";
import {
  getUserManagementById,
  postDataUser,
  editDataUser,
} from "../../services/user-management";
import { useRouter } from "next/router";
import { upload } from "../../services/image";
import { useEffect } from "react";

const Registration = (props) => {
  const router = useRouter();
  let role = localStorage.getItem("role");
  let id = localStorage.getItem("id");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    phone_number: "",
    address: "",
    photo_url: "",
  });

  const title = props.name == "edit" ? "Edit Profile" : "Registration";
  const titleButton = props.name == "edit" ? "Edit" : "Register";
  const getDataById = async () => {
    try {
      if (props.name == "edit") {
        let value;
        // console.log(type, "typeeeeee");
        if (role == "user_management") {
          console.log("teeeeeeeeeeeest");
          value = await getUserManagementById(id);
        } else {
          value = await getEmployeeManagementById(id);
        }
        console.log(value, "value");
        setFormData(value);
      }
    } catch (e) {
      console.log(e, "erroooooooooor");
    }
  };

  useEffect(() => {
    getDataById();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (props.name == "edit") {
      if (role == "user_management") {
        if (selectedFile) {
          let uploadPic = new FormData();
          uploadPic.append("img", selectedFile);
          let dataPic = await upload(uploadPic);
          if (dataPic) formData.photo_url = dataPic.filename;
        }
        const data = await editDataUser(formData, id);
        if (data) router.push("/");
      } else {
        if (selectedFile) {
          let uploadPic = new FormData();
          uploadPic.append("img", selectedFile);
          let dataPic = await upload(uploadPic);
          if (dataPic) formData.photo_url = dataPic.filename;
        }
        const data = await editDataEmployee(formData, id);
        if (data) router.push("/");
      }
    } else {
      if (role == "user_management") {
        if (selectedFile) {
          let uploadPic = new FormData();
          uploadPic.append("img", selectedFile);
          let dataPic = await upload(uploadPic);
          if (dataPic) formData.photo_url = dataPic.filename;
        }
        const data = await postDataUser(formData);
        if (data) router.push("/login");
      } else {
        if (selectedFile) {
          let uploadPic = new FormData();
          uploadPic.append("img", selectedFile);
          let dataPic = await upload(uploadPic);
          if (dataPic) formData.photo_url = dataPic.filename;
        }
        let data = await postDataEmployee(formData);
        if (data) router.push("/login");
      }
    }
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
            name="username"
            value={formData.username}
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
            name="phone_number"
            value={formData.phone_number}
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
