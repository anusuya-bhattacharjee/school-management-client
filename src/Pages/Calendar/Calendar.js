import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

// const bookedDays = [new Date(2022, 7, 8), new Date(2022, 7, 9)];
// const bookedStyle = { background: 'green'};

const Calendar = ({ date, setDate }) => {
  const [student] = useAuthState(auth);
  const [Attendance, setAttendance] = useState({});

  console.log(student?.email);

  const [studentDetails, setStudentDetails] = useState({});
  console.log(studentDetails)

  useEffect(() => {
    fetch(`http://localhost:5000/studentDetails/${student && student.email}`)
      .then((res) => res.json())
      .then((data) => setStudentDetails(data));
  }, [student]);

  useEffect(() => {
    fetch(`http://localhost:5000/studentId/${studentDetails && studentDetails.studentId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setAttendance(data)
    console.log(Attendance.time);
    });
  }, [studentDetails,Attendance.time])
  
//   if (Attendance.time){
//   let attendences = Attendance.time;
//   let dateValues = attendences.map(attendance => attendance.split('T')[0]);
//   console.log(dateValues);
// }
  try{
  let attendences = Attendance.time;
  let dateValues = attendences.map(attendance => attendance.split('T')[0]);
  console.log(dateValues);
  let bookedDays = dateValues.map(dateValue => new Date(dateValue));
  const bookedStyle = { background: 'green'};

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.collinsdictionary.com/images/full/school_309241295.jpg"
          className="max-w-sm rounded-lg shadow-2xl ml-6"
          alt=""
        />
        <div>
          <DayPicker
            styles={{
              caption: { color: "White" },
            }}
            modifiers={{ booked: bookedDays }}
            modifiersStyles={{ booked: bookedStyle }}
            mode="single"
            selected={date}
            onSelect={setDate}
          />

          <p className="text-white">You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
}
catch{
  const bookedDays = [new Date(2022, 7, 8), new Date(2022, 7, 9)];
  const bookedStyle = { background: 'green'};

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.collinsdictionary.com/images/full/school_309241295.jpg"
          className="max-w-sm rounded-lg shadow-2xl ml-6"
          alt=""
        />
        <div>
          <DayPicker
            styles={{
              caption: { color: "White" },
            }}
            modifiers={{ booked: bookedDays }}
            modifiersStyles={{ booked: bookedStyle }}
            mode="single"
            selected={date}
            onSelect={setDate}
          />

          <p className="text-white">You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
}

// const bookedDays = [new Date(2022, 7, 8), new Date(2022, 7, 9)];
  
  // const bookedStyle = { background: 'green'};


  // return (
  //   <div className="hero min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
  //     <div className="hero-content flex-col lg:flex-row-reverse">
  //       <img
  //         src="https://www.collinsdictionary.com/images/full/school_309241295.jpg"
  //         className="max-w-sm rounded-lg shadow-2xl ml-6"
  //         alt=""
  //       />
  //       <div>
  //         <DayPicker
  //           styles={{
  //             caption: { color: "White" },
  //           }}
  //           modifiers={{ booked: bookedDays }}
  //           modifiersStyles={{ booked: bookedStyle }}
  //           mode="single"
  //           selected={date}
  //           onSelect={setDate}
  //         />

  //         <p className="text-white">You have selected: {format(date, "PP")}</p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Calendar;
