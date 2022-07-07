import { format } from 'date-fns/esm';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.css';

const Calendar = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://www.collinsdictionary.com/images/full/school_309241295.jpg" class="max-w-sm rounded-lg shadow-2xl ml-6" alt=""/>
        <div>
        <style>{`.custom-head { color: red }`}</style>
        <DayPicker 
          styles={{
        caption: { color: 'orange' }
      }}
              mode="single"
              selected={date}
              onSelect={setDate}
          />
          <p>You have selected: {format(date, 'PP')}</p>
        </div>
          </div>
          </div>
    );
};

export default Calendar;