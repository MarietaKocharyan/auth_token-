import React from 'react';

const Dologin = () => {
    return (
        <form>
        <h1>Please Login </h1>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
};

export default Dologin;