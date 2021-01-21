import React from 'react';
import Navbar from './components/layout/Navbar';
import resumeData from './data/resumeData';

function App() {
  return (
    <>
    <Navbar resumeData={resumeData} />
    </>
  );
}

export default App;
