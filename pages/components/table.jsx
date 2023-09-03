import React from "react";
import { useRouter } from "next/router";

const Table = (props) => {
  console.log(props.name, "<<<<<<<<<<");
  const router = useRouter()
  const goToDetail = (id) => {
    console.log(id,"iiiiiid")
    // Use router.push to navigate to the registration page
    router.push(`/profile/${props.name}/${id}`);
  };
  return (
    <div className="container mt-5 ml-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((el, i) => {
              return (
                <>
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    <td>{el.phone_number}</td>
                    <td><span
                  className="text-primary"
                  style={{ cursor: 'pointer' }}
                  onClick={() => goToDetail(el.id)}
                >
                  Detail
                </span></td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
