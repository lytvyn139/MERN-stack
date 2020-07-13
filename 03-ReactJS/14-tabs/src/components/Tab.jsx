import React, { useState } from "react";

const Tab = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const content = [
    "wow tab 1 so inforamtive",
    "this give you magical power 🔥🥓",
    "Don't eat the shrooms 🍄",
    "Lorem ipsum blah blah",
  ];

  return (
    <div className='container mt-5'>
      <ul className='nav nav-tabs my-4'>
        <li className='nav-item'>
          <a
            className={currentTab === 0 ? "nav-link active" : "nav-link"}
            href='/#'
            onClick={(e) => setCurrentTab(0)}>
            Tab 1
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={currentTab === 1 ? "nav-link active" : "nav-link"}
            href='/#'
            onClick={(e) => setCurrentTab(1)}>
            Tab 2
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={currentTab === 2 ? "nav-link active" : "nav-link"}
            href='/#'
            onClick={(e) => setCurrentTab(2)}>
            Tab 3
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={currentTab === 3 ? "nav-link active" : "nav-link"}
            href='/#'
            onClick={(e) => setCurrentTab(3)}>
            Tab 4
          </a>
        </li>
      </ul>
      <div className='alert alert-info'>{content[currentTab]}</div>
    </div>
  );
};

export default Tab;
