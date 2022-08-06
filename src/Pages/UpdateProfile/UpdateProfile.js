import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/student/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email_address = event.target.email_address.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const studentId = event.target.studentId.value;
    const pincode = event.target.pincode.value;
       
      const UpdatedStudentDetails = {
        studentId,
        firstName,
        lastName,
        email_address,
        address,
        pincode,
        phone
      };

      fetch(`http://localhost:5000/updateStudent/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UpdatedStudentDetails),
      })
        .then((res) => res.json())
        .then((data) => setStudent(data));
      alert("Student updated successfully");
      navigate("/allProfile");

  };

  return (
    <div>
      <div className="flex justify-center">
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
                defaultValue={student.firstName}
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
                defaultValue={student.lastName}
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
                defaultValue={student.studentId}
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
                defaultValue={student.email_address}
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
                defaultValue={student.address}
                placeholder="Your address"
              />
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
                defaultValue={student.phone}
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
                defaultValue={student.pincode}
                placeholder="pincode"
              />
            </div>
            <input type="submit" className="btn mt-6 ml-20" value="SAVE" />
          </div>
        </form>
        <div>
        <img src={student.image} className="h-60 mt-28 ml-20 rounded-lg" alt="Profile Image" />
      </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
