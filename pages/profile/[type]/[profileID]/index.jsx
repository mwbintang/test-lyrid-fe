import React from "react";
import NavBarCustom from "../../../components/navbar";
import { useState, useEffect } from "react";
import { getUserManagementById } from "../../../../services/user-management";
import { getEmployeeManagementById } from "../../../../services/employee-management";
import { useRouter } from "next/router";
import { getImage } from "../../../../services/image";
import Auth from "../../../protected/auth";

function UserProfile() {
  const router = useRouter();
  console.log(router.query, "routeeeeer");
  const type = router.query;
  const [dataDetails, setDataDetails] = useState();
  const [image, setImage] = useState("");
  // const [id, setId] = useState()
  // setId(type.profileID)
  // {
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   address: "",
  //   role: "",
  //   profilePictureUrl: "",
  // }
  const getDataById = async () => {
    try {
      let value;
      console.log(type, "typeeeeee");
      if (type.profileID) {
        if (type.type == "user") {
          value = await getUserManagementById(type.profileID);
        } else {
          value = await getEmployeeManagementById(type.profileID);
        }
        console.log(value, "value");
        setDataDetails(value);
        if (value.url_photo) {
          const imageData = await getImage(value.url_photo);
          if (imageData) {
            setImage(imageData.data);
          }
        }
      }
    } catch (e) {
      console.log(e, "erroooooooooor");
    }
  };

  console.log(dataDetails?.address, "dataDetails.address");
  useEffect(() => {
    // if (type) {
    getDataById(); // Only run on the client side
    // }
  }, [router.query]);

  return (
    <>
      <NavBarCustom />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">User Profile</h2>
              </div>
              <div className="card-body">
                <img
                  src={image}
                  alt="Profile Picture"
                  className="img-fluid rounded-circle ml-5"
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={dataDetails?.username}
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
                    value={dataDetails?.email}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    value={dataDetails?.phone_number}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    readOnly
                    value={dataDetails?.address}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth(UserProfile);
