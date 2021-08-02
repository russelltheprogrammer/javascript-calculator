import './index.scss';
import React from 'react';
import JavascriptCalculator from './JavascriptCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">Javascript Calculator</header>
      <JavascriptCalculator/>
      <footer className="footer">
        Coded By <a 
        target="_blank" rel="noreferrer" href="https://github.com/russelltheprogrammer">
        RussellTheProgrammer</a> for FCC curriculum
      </footer>
    </div>
  );
}

export default App;
