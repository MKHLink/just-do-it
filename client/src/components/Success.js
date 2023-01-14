import React, { useEffect } from 'react';

function Success() {

    useEffect(()=>{
        setTimeout(() => {
            window.location.assign('/');
          }, 5000);
    });
    
    return (
      <div className="jumbotron"> 
          <h1>We appreciate it!!</h1>
          <h2>
            Thank you for your donation!
          </h2>
      </div>
    );
  };

  export default Success;