import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../styles/_dateRangePicker.scss';

const Calendar = (props) => {
  const today = new Date();
  return (
    <div className="date-range-picker">
      {props.isDateOpen && (
        <DateRangePicker
          className="custom-date-range"
          onChange={props.onChange}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          minDate={today}
          ranges={[props.dateRange]}
          direction="horizontal"
        />
      )}
    </div>
  );
};

export default Calendar;
