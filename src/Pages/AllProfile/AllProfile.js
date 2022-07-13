import React from "react";

const AllProfile = (props) => {
  const {
    email_address,
    address,
    firstName,
    lastName,
    phone,
    pincode,
    studentId,
    _id
  } = props.profile;

  return (
        <tbody>
          <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email_address}</td>
            <td>{address}</td>
            <td>{pincode}</td>
            <td>{phone}</td>
            <td>{studentId}</td>
           
          </tr>
          <button class="btn btn-sm">Update</button>
        </tbody>
        
  );
};

export default AllProfile;
