import React, { useState } from 'react';
import '../../assets/index.css';
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const prevMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const totalDays = daysInMonth(year, month);
        const firstDay = firstDayOfMonth(year, month);

        const blanks = Array(firstDay).fill(0);
        const days = Array.from({ length: totalDays }, (_, i) => i + 1);

        return (
           <div className="calendar">
                <div className="calendar_header">
                    <button onClick={prevMonth} className='calendar_button'>Prev</button>
                    <h1 className='calendar_month'>{monthsOfYear[month]} {year}</h1>
                    <button onClick={nextMonth} className='calendar_button'>Next</button>
                </div>
                <div className="calendar_grid">
                    {daysOfWeek.map(day => (
                        <div key={day} className="calendar_day days">{day}</div>
                    ))}
                    {blanks.map((_, index) => (
                        <div key={index} className="calendar_day blank"></div>
                    ))}
                    {days.map(day => (
                        <div key={day} className="calendar_day dates">{day}</div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="calendar_container">
            <h1 className="calendar_title" >Planned Events</h1>
            {renderCalendar()}
        </div>
    );
};

export default Calendar;

