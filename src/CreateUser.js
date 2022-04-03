import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CreateUser = ({users,setUsers}) => {

let navigate = useNavigate()
  
const [username,setUsername]=useState('');
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [description,setDescription]=useState('');
const [gender,SetGender]=useState('');

  return <div >
    { !users? <h2>Loading...</h2> : <div id="create-user">
            
      <h1>Create User</h1>
      <div>
      <FormControl fullWidth sx={{ m: 1 }}>
            <TextField 
              label="Name"
              placeholder='Enter Full Name'
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              margin='normal'
              required />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              label="username"
              placeholder='Username'
              name="username"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              margin='normal'
              required />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
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
      </FormControl>
      <FormControl fullWidth sx={{ ml:1 }}>
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
      </FormControl>
      </div>
        <div>   
        <RadioGroup
            aria-label="gender"
            value={gender}
            name="gender"
            id="gender"
            onChange={(event) => SetGender(event.target.value)}
            row
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        </div> 
        <div>
          
            <Button variant="outlined" color="secondary" sx={{ m: 1 }}
              type="submit"
              onClick={() => {
                // Creating New User
                const newUser={
                  id: `010${users.length+1}`,
                  username,
                  name,
                  email,
                  description,
                  gender,
                  profile: null
                }
                // Adding the new user to the Users List by using Spreed Opration
                setUsers([...users, newUser]);
                // Redirecting To Users Display For showing the Added User
                navigate('/')
              }
              }
            >
              Create User
            </Button>
            </div>
            <Button
                variant='contained'
                color='inherit'
                onClick={()=>{
                    navigate('/')
                }}
                sx={{margin:"3%"}}
            >
                Back to Home
            </Button>  
          </div>} 
           
    </div>
  
};

