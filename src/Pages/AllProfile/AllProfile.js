import React from "react";
import { useNavigate } from "react-router-dom";

const AllProfile = (props) => {
  const navigate = useNavigate();

  const navigateToProfileupdate = (id) => {
    navigate(`/profile/${id}`);
  };

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
          <button class="btn btn-sm" onClick={()=> navigateToProfileupdate(_id)}>Update</button>
        </tbody>
        
  );
};

export default AllProfile;
