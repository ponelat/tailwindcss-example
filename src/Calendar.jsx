import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';



export default function(props={}) {
  const [value, onChange] = useState(new Date());

  return (
    <div >
      <Calendar
        className={props.className}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
