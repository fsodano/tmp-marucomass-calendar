import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date)
  }

  return (
    <div className='container'>
      <h1 className='title'>Calendario</h1>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default App;
