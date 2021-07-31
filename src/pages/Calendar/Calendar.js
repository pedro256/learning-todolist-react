import React, { Component } from 'react';
import { DatePicker, RangePicker } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';

export default function Calendar() {

  const theme = {
    primary: {
      light: "#757ce8",
      main: "#120A8F",
      dark: "#002884",
    },
    grey: {
      700: "#707070",
      900: "#1b1b1d",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      disabled: "#BABABA",
    },
  };

  const  Day = ({  day  }) => {
    return  (
      <>
        <p  className="date">{day.format('DD')}</p>
        <p  className="date">7</p>
      </>
      );
    };
  
  

    const  handleResponsive  =  setNumberOfMonth  =>  {
      let  width  =  document.querySelector('.tp-calendar').clientWidth;
      if  (width  >  900)  {
        setNumberOfMonth(3);
      }  else  if  (width  <  900  &&  width  >  580)  {
        setNumberOfMonth(2);
      }  else  if  (width  <  580)  {
        setNumberOfMonth(1);
      }
    };
    const onChange = date => console.log(date)

  return (
    <DatePicker
      theme={theme}
      handleChange={onChange}
		  selectedDays={['2019-11-06']} //initial selected days
		  jalali={false}
		  numberOfMonths={3}
		  numberOfSelectableDays={3} // number of days you need 
		  disabledDays={['2019-12-02']} //disabeld days
		  responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
		  disabledBeforToday={true} 
		  disabled={false} // disable calendar 
		  dayComponent={Day} //custom day component 
		  titleComponent="Titulo"// custom title of days
      onChange={dates => console.log("dates", dates)}
      />
  );
}
