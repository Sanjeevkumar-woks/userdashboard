import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({users,setUsers}) {
   
    let {editId} = useParams()

   let navigate = useNavigate()

  const userdata = users.find(user=> user.id === editId)

  const [username,setUsername]=useState(userdata.username);
  const [name,setName]=useState(userdata.name);
  const [email,setEmail]=useState(userdata.email);
  const [description,setDescription]=useState(userdata.description);
  const [gender,SetGender]=useState(userdata.gender);

  return <div id="create-user">
    { !users? <h2>Loading...</h2> : <div>
      <h1>Edit User</h1>
          <div className="App-header"
            style={{
              minHeight: "50vh",
              margin: "1%"
            }}>
            <TextField
              label="Name"
              placeholder='Enter Full Name'
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              margin='normal'
              required />
            <TextField
              label="username"
              placeholder='Username'
              name="username"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              margin='normal'
              required />
            <TextField
              type="email"
              label="email"
              placeholder=' enter Your email'
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              margin='normal'
              required />
            <TextField
              type="text"
              label="description"
              placeholder='Bio '
              name="description"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              InputProps={{ maxLength: 100 }}
              margin='normal' />

        <RadioGroup
            aria-label="gender"
            value={gender}
            name="gender"
            id="gender"
            onChange={(event) => SetGender(event.target.value)}
            row
            required
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

       
        <Button variant="outlined" color="secondary" sx={{ m: 1 }}
              type="submit"
              onClick={() => {
                // Creating New User
                const updatedUser={
                 ...userdata,
                  username,
                  name,
                  email,
                  description,
                  gender, 
                }
                const ind =users.indexOf(userdata);
                users[ind]=updatedUser
                // Adding the new user to the Users List by using Spreed Opration
                
                // Redirecting To Users Display For showing the Added User
                navigate('/')
              }
              }
            >
              Update
            </Button>
    </div>
  </div>}
  </div>
};



export default EditUser
