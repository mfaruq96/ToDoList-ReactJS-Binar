import React, { useState, useEffect } from 'react';
import Create from './Components/Create';
import Ongoing from './Components/Ongoing';
import Complete from './Components/Complete';
import { data } from './data'
import './App.css';

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("dataTodo")) {
      const storedList = JSON.parse(localStorage.getItem("dataTodo"));
      setMyData(storedList);
    } else {
      localStorage.setItem("dataTodo", JSON.stringify(data))
    }
  }, [])


  return (
    <>
      <div className='App'>
        <div className='bg-layout'>Todo List App Group 1 - STAGING</div>
        <div className='bg-container'>
          <Create myData={myData} setMyData={setMyData} />
          <div className='container pt-5'>
            <div className='bg-spacer py-3 rounded-pill text-white'>
              My To do List test
            </div>
          </div>
          <Ongoing myData={myData} setMyData={setMyData} />
          <Complete myData={myData} setMyData={setMyData} />
        </div>
      </div>
    </>
  );
}

export default App;
