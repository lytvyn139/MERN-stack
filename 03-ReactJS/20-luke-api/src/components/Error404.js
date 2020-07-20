import React from "react";

const Error404 = (props) => {
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col text-center'>ERROR 404</div>
      </div>
      <div className='row justify-content-center'>
        <div className='col text-center'>
          <img src='error.png' alt='error' />
        </div>
      </div>
    </>
  );
};

export default Error404;
