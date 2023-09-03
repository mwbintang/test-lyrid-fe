import React from "react";
import NavBarCustom from "../../../components/navbar";

function UserProfile() {
  const userDetails = {
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    address: "1234 Elm Street, Apt 567, City, Country",
    role: "User",
    profilePictureUrl:"https://smarco-images-fix.s3.ap-southeast-1.amazonaws.com/products/original/WRP%20ON%20THE%20GO%20CHOCOLATE%20200%20ML%20%282%29.JPG"
  };

  return (
    <>
            <NavBarCustom/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">User Profile</h2>
            </div>
            <div className="card-body">
            <img
            src={userDetails.profilePictureUrl}
            alt="Profile Picture"
            className="img-fluid rounded-circle ml-5"
            style={{ width: '150px', height: '150px' }}
          />
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={userDetails.name}
                  readOnly
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
                  value={userDetails.email}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  value={userDetails.phoneNumber}
                  readOnly
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  readOnly
                >
                  {userDetails.address}
                </textarea>
              </div>
              <div className="mb-3">
                <label>Role</label>
                <input
                  type="text"
                  className="form-control"
                  value={userDetails.role}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                  </>
  );
}

export default UserProfile;