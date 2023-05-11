import React from 'react';
import './App.css';
import Prop from './Prop';

function Prac() {
  let carArray = ["suzuki","hyndai","mahindra","thar"];
  let carArray2 = [{name:"suzuki"},{name:"thar"},{name:"alto"},{name:"800"},];
  let propsdata = "my name is upendra";
  
  return (
    <div className="App">
      <ul>
        {carArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul>
        {carArray2.map((item,index) => (
          <li key={item.name+index}>{item.name}</li>
        ))}
      </ul>

      <Prop datakey={propsdata} />
    </div>
  );
}

export default Prac;
