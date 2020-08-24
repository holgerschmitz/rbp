import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="page">
      <h1>Login with React</h1>
        <Link to="/private">
           <button type="button">
                Visit Restricted Page
           </button>
       </Link>
    </div>
  );
}
