import React, {useState, useEffect } from 'react';
import '../custom/components/datePicker.scss';


export default function DatePicker ({onChange}) {
    let oneDay = 60 * 60 * 24 * 1000;
    let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
    let date = new Date();
 
    const [ open, setOpen ] = useState(false);
    const [ selectedDay, setSelectedDay ] = useState('');
    const [ monthDetails, setMonthDetails ] = useState([]);
    const [month, setNewMonth] = useState(date.getMonth());
    const [year, setNewYear] = useState(date.getFullYear());
    
    useEffect(() => {
        getMonthDetails(5, 2022);
        setSelectedDay(getDateStringFromTimestamp({date : date.getDate()}))
    }, []);

    /**
     *  Core
     */

    const daysMap = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    ];

    const monthMap = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ];

    const getNumberOfDays =  (year, month) => {
        return 40 - new Date(year, month, 40).getDate();
    };

    const getDayDetails = ( args ) => {
        let date = args.index - args.firstDay; 
        let day = args.index%7;
        let prevMonth = args.month-1;
        let prevYear = args.year;
        if(prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month, 
            timestamp,
            dayString: daysMap[day]
        }
    }
    
    const getMonthDetails = (year, month) => {
        let firstDay = (new Date(year, month)).getDay();
        let numberOfDays = getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0; 
        let cols = 7;
        for(let row=0; row<rows; row++) {
            for(let col=0; col<cols; col++) { 
                currentDay = getDayDetails({
                    index,
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return setMonthDetails(monthArray);
    };

    const isCurrentDay = (day) => {
        return day.timestamp === todayTimestamp;
    };

    const isSelectedDay = (day) => {
        return getDateStringFromTimestamp(day) === selectedDay;
    }; 

    const getMonthStr = (month) => {
        return monthMap[Math.max(Math.min(11, month), 0)] || 'Month';
    };

    const getDateStringFromTimestamp = (day) => {
        const dateString = `${year}-${month+1}-${day.date}`
        let dateObject = new Date(dateString);
        let date = dateObject.getDate();
        return dateObject.getFullYear() + '-' + ((month+1) < 10 ? '0'+(month+1) : (month+1)) + '-' + (date < 10 ? '0'+date : date);
    };

    const onDateClick = (day) => {
        setSelectedDay(getDateStringFromTimestamp(day))
        if(onChange) {
            onChange(day.timestamp);
        }
    };

    const setYear = (offset) => {
        let yearState = year + offset;
        let monthState =  month;
        setNewMonth(monthState)
        setNewYear(yearState)
        getMonthDetails(monthState, yearState)
    };

    const setMonth = (offset) => {
        let yearState = year;
        let monthState =  month + offset;
        if(month === -1) {
            monthState = 11;
            yearState--;
        } else if(month === 12) {
            monthState = 0;
            yearState++;
        }
        setNewMonth(monthState)
        setNewYear(yearState)
        getMonthDetails(monthState, yearState)
    }

    /**
     *  Renderers
     */

    const renderCalendar = () => {
        console.log(monthDetails)
        let days = monthDetails.map((day, index)=> {
            return (
                <div className={'c-day-container ' + (day.month !== 0 ? ' disabled' : '') + 
                    (isCurrentDay(day) ? ' highlight' : '') + (isSelectedDay(day) ? ' highlight-green' : '')} key={index}>
                    <div className='cdc-day'>
                        <span onClick={()=> onDateClick(day)}>
                            {day.date}
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <div className='c-container'>
                <div className='cc-head'>
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d,i)=><div key={i} className='cch-name'>{d}</div>)}
                </div>
                <div className='cc-body'>
                    {days}
                </div>
            </div>
        )
    }


    return (
        <div className='datePicker-container'>
            <div className='mdp-input'  onClick={()=> setOpen(!open)}>
                <input type='text' defaultValue={selectedDay} />
            </div>
            {open ? (
                <div className='mdp-container'>
                    <div className='mdpc-head'>
                        <div className='mdpch-button'>
                            <div className='mdpchb-inner' onClick={()=> setYear(-1)}>
                                <span className='mdpchbi-left-arrows'></span>
                            </div>
                        </div>
                        <div className='mdpch-button'>
                            <div className='mdpchb-inner' onClick={()=> setMonth(-1)}>
                                <span className='mdpchbi-left-arrow'></span>
                            </div>
                        </div>
                        <div className='mdpch-container'>
                            <div className='mdpchc-year'>{year}</div>
                            <div className='mdpchc-month'>{getMonthStr(month)}</div>
                        </div>
                        <div className='mdpch-button'>
                            <div className='mdpchb-inner' onClick={()=> setMonth(1)}>
                                <span className='mdpchbi-right-arrow'></span>
                            </div>
                        </div>
                        <div className='mdpch-button'>
                            <div className='mdpchb-inner' onClick={()=> setYear(1)}>
                                <span className='mdpchbi-right-arrows'></span>
                            </div>
                        </div>
                    </div>
                    <div className='mdpc-body' onClick={()=> setOpen(!open)}>
                        {renderCalendar()}
                    </div>
                </div>
            ) : ''}
        </div>
    )

}