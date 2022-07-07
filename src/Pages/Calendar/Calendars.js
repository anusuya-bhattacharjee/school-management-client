import React from 'react';
import { useState } from "react";
import Calendar from './Calendar';

const Calendars = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Calendar date={date} setDate={setDate}></Calendar>
        </div>
    );
};

export default Calendars;