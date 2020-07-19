import React, { useEffect } from "react";

const Locations = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div className='col-sm-8 offset-sm-2'>
      <h1>Welcome to the {props.city} location!</h1>
    </div>
  );
};

export default Locations;
