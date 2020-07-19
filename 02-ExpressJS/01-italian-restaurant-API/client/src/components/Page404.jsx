import React, { useEffect } from "react";

const Page404 = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div className='col-sm-8 offset-sm-2'>
      <h2>Can't find the page {props.location.pathname} </h2>
    </div>
  );
};

export default Page404;
