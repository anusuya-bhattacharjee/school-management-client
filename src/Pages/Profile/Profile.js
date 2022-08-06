import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const Profile = () => {
  const [student] = useAuthState(auth);
  const [studentDetails, setStudentDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/studentDetails/${student && student.email}`)
      .then((res) => res.json())
      .then((data) => setStudentDetails(data));
  }, [student]);

  const handleFormSubmit = (event) => {

    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email_address = event.target.email_address.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const studentId = event.target.studentId.value;
    const pincode = event.target.pincode.value;
    const image = (event.target.image.files[0]);
    console.log(image);

    const imageStorageKey = 'da56129c83455a8f5f0388053e51f12f';
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', studentId);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      console.log('imagebb', result);
      const image = result.data.url;
      const Student = {
        studentId,
        firstName,
        lastName,
        email_address,
        address,
        pincode,
        phone,
        image
      };
      fetch("http://localhost:5000/addStudentDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Student),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Your Information added successfully!!");
        });
    })
  };

  // const imageStorageKey = 'da56129c83455a8f5f0388053e51f12f';

  // const fileSelectedHandler = event => {
  //   const image = (event.target.files[0]);
  //   console.log(image);
  //   const formData = new FormData();
  //   formData.append('image', image);
  //   const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
  //   fetch(url, {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(res => res.json())
  //   .then(result => {
  //     // const img = result.data.url;
  //     console.log('imagebb', result);
  //   })

  // }

  return (
    <div className="flex justify-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
      <form
        class="w-full max-w-lg"
        onSubmit={handleFormSubmit}
        enctype="multipart/form-data"
      >
        <div class="flex flex-wrap -mx-3 mb-6 mt-16">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="firstName"
              defaultValue={studentDetails.firstName}
              placeholder="First Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="lastName"
              defaultValue={studentDetails.lastName}
              placeholder="Last Name"
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Student Id
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="studentId"
              defaultValue={studentDetails.studentId}
              placeholder="Give your ID"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="email_address"
              type="email"
              defaultValue={student && student.email}
            />
          </div>

          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="address"
            >
              ADDRESS
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="address"
              type="address"
              defaultValue={studentDetails.address}
              placeholder="Your address"
            />
          </div>

         <div className="ml-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="file_input"
            >
              UPLOAD IMAGE
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              aria-describedby="file_input_help"
              id="file_input"
              name="image"
              Value={studentDetails.image}
              type="file"
            />

            <p
              class="mt-1 text-sm text-gray-900 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div> 
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="phone"
            >
              Phone
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              name="phone"
              defaultValue={studentDetails.phone}
              placeholder="Phone no."
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              PINCODE
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              name="pincode"
              defaultValue={studentDetails.pincode}
              placeholder="pincode"
            />
          </div>
          <input type="submit" className="btn mt-6 ml-20" value="SAVE" />
        </div>
      </form>
      <div>
        <img src={studentDetails.image} className="h-60 mt-28 ml-20 rounded-lg" alt="Profile Image" />
      </div>
    </div>
  );
};

export default Profile;
