import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import BirthdayCard from './components/BirthdayCard';

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <BirthdayCard recipient="John" />
      </div>
    </Router>
  );
};

export default App;
