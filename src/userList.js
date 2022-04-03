import React from 'react';
import './App.css';
import { Avatar, Button, IconButton } from '@mui/material';
import { Edit ,DeleteOutline, PersonAdd} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';


function UserList({users,setUsers}) {
  

  let navigate = useNavigate()

 
  const Delete = id => {
    setUsers(users.filter(user=> user.id !== id ))
 }

  return (
    <div className="App">
      {!users ? <h1>Loading...</h1> :<div>
        <h1>
          <Button
          sx={{margin:"2%"}}
          variant="contained"
          onClick={()=>{navigate("/create-user")}}
          >
           <PersonAdd/> Create User
          </Button>
          </h1>
        <div className="App-header" >
          
       { users.length === 0 ? <h2>No user Found</h2>  :  <table>
              <thead>
                <tr  style={{textAlign:"center"}}>
                  <th style={{width: "fit-content", backgroundColor:"#ffeecc",padding:"5px"}}>SI.No.</th>
                  <th colSpan="2">User name</th>
                </tr>
              </thead>
           <tbody> 
             { users.map((user, id)=>(
                <tr key={id} >
                    <td  style={{ backgroundColor:"#ffeecc", borderRight:"2px black solid"}}>{id+1}</td>
                    <td className="user-cell" >
                      <Link to={`/profile/${user.id}`} style={{
                        display:"flex",
                        alignItems:"center",
                        width: "100%",
                        padding:"2px",
                        textDecoration:"none"
                        }} >
                       { !user.profile?  <Avatar alt="profile" title={user.name} {...stringAvatar(user.name)} /> :  <Img name={user.name} id={user.profile} gender={user.gender}  />  }
                        <p> {user.name}</p>
                        </Link>
                    </td>
                    <td
                      className="edit-btns"
                    > 
                      <IconButton
                        onClick={()=>{navigate(`/edit-user/${user.id}`)}}
                      >
                        <Edit color="primary" />
                      </IconButton>
                      <IconButton
                        onClick={()=> Delete(user.id)}>
                        <DeleteOutline color="error" />
                      </IconButton>
                    </td>
                     
                </tr>
              ))}
              </tbody>
          </table>}
        </div>
      </div>}
    </div>
  );
}

export default UserList;

// default profile picture

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 7)) & 0xff;
    color += `${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}



export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      marginRight:"2%",
      // border:"2px solid black"
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1] ? name.split(' ')[1][0] : ''}`,
  };
}

export const Img = ({name, gender, id, sx, className}) => <img className={className || ''}  style={{ width:"50px", height:"50px", ...sx}} src={`/avatars/${gender}/${id}.jpg`} alt={name} title={name}  />