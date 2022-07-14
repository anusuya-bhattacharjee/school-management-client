import React from "react";
import { useNavigate } from "react-router-dom";

const Searched = ({ suggestion }) => {
  const navigate = useNavigate();

  const navigateToProfileupdate = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div  class="">
 <table class="table w-full">
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Mobile</th>
          <th>StudentID</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{suggestion.firstName}</td>
        <td>{suggestion.lastName}</td>
        <td>{suggestion.email_address}</td>
        <td>{suggestion.address}</td>
        <td>{suggestion.pincode}</td>
        <td>{suggestion.phone}</td>
        <td>{suggestion.studentId}</td>
        <td><button class="btn btn-sm" onClick={()=> navigateToProfileupdate(suggestion._id)}>Update</button></td>
      </tr>
      </tbody>
    </table>
    </div>
   
  );
};

export default Searched;
