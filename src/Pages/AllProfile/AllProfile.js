import React, { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import FileDownload from "js-file-download";

const AllProfile = (props) => {
  const navigate = useNavigate();

  const download = () => {
    Axios({
      url: "http://localhost:5000/pdfDownload",
      method: "GET",
      responseType: "blob"
    }).then((res) =>{
      console.log(res);
      FileDownload(res.data, 'Download.PDF')
    })
  }

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
    _id,
    image
  } = props.profile;

  return (
    
          <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email_address}</td>
            <td>{address}</td>
            <td>{pincode}</td>
            <td>{phone}</td>
            <td>{studentId}</td>
            <td>{image}</td>
            <td><button class="btn btn-sm" onClick={()=> navigateToProfileupdate(_id)}>Update</button></td>
            <td><button class="btn btn-sm" onClick={download}>Download</button></td>
          </tr>
        
        
  );
};

export default AllProfile;
