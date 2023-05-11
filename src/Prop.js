import React from 'react';

const Prop = (props) => {
  console.log("hello", props);
  return (
    <div>
      {/* app.js mai ka data mujhe is component mai chahiye toh prop use kr raha hu */}
      <div>props data - {props.datakey}</div>
    </div>
  );
};

export default Prop;
