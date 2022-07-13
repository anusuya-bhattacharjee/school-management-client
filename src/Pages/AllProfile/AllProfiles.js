import React, { useEffect, useState } from 'react';
import AllProfile from './AllProfile';

const AllProfiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProfiles')
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, []);

    return (
        <div>
        <div class="overflow-x-auto">
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
            {/* <th>Edit</th> */}
          </tr>
        </thead>
            { profiles.map((profile) => <AllProfile
            profile={profile}
            key={profile._id}></AllProfile>)}
      </table>
    </div>
        </div>
    );
};

export default AllProfiles;