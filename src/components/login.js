import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const style = {
  textAlign: 'center'
};


async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}


const Dologin = ({setToken}) => {
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async e => {
    const token = await loginUser({
      username,
       password
    });
    setToken(token)
  };
  
  return (
        <form style={style}>
        <h1>Please Login </h1>
        <div>
          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={e => setUserame(e.target.value)}/>
        </div>
        <div>
          <br />
          <TextField id="outlined-basic" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)} />
        </div>
        <br />
        <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
      </form>
    )
};

Dologin.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Dologin;