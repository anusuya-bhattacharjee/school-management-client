import { format } from "date-fns/esm";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import DatePicker from "react-multi-date-picker";
// import { Calendar } from "react-multi-date-picker";

const Calendar = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
            mode="single"
            selected={date}
            onSelect={setDate}
          />

          <p className="text-white">You have selected: {format(date, "PP")}</p>
        </div>
        <DatePicker
          mapDays={({ date }) => {
            let props = {};
            let isWeekend = [0, 6].includes(date.weekDay.index);

            if (isWeekend) props.className = "highlight highlight-red";

            return props;
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
