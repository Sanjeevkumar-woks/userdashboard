import React from 'react'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Avatar, Button, IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { Img, stringAvatar } from './userList'

function Profile({users,setUsers}) {

    const {userId} = useParams()
    
    let [user] = users.filter(user=> user.id === userId)
    console.log(user);
    let {sx, children} = stringAvatar(user.name)
    let navigate = useNavigate()

    const Delete = id => {
        setUsers(users.filter(user=> user.id !== id ))
        navigate('/')
     }
    
    return (
        <div className="profile">
            {user.length === 0 ? 
            <h4>No Profile Found</h4> 
            : 
            <div className='profile-container'>
                <div
                className="profile-card"
                >
                     
                        <div>
                            <div 
                                style={{
                                    width: "fit-content",
                                    height: "200px",
                                    overflow: 'hidden',
                                    position:"relative",
                                    borderRadius: "50%"
                                }}>
                                 { !user.profile? 
                                    <Avatar
                                        alt="profile" 
                                        title={user.name} 
                                        children={children} 
                                        sx={{ ...sx, width: 200, height: 200, fontSize: 100 }} 
                                    /> 
                                    : 
                                    <Img
                                        name={user.name}
                                        id={user.profile}
                                        gender={user.gender}
                                        sx={{
                                            borderRadius: "50%",
                                            border:"3px groove black",
                                            width:'200px', 
                                            height:"200px"
                                        }}
                                    /> 
                                    }
                                <div
                                    style={{
                                        position:"absolute",
                                        backgroundColor:"rgba(0,0,0, 0.5)",
                                        height:"30px",
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        width:"100%",
                                        bottom:0,
                                        color:"white"
                                    }}
                                >
                                <IconButton
                                    color="inherit"
                                    size="small"
                                    onClick={()=>{navigate(`/edit-profile/${user.id}`)}}
                                >
                                    <Edit/> Edit
                                </IconButton>
                            </div>
                            </div>
                            
                        </div>
                    
                    
                    <h1>{user.name}</h1>
                    <p>
                        <Button
                            variant="outlined"
                            color="inherit"
                            sx={{margin: 1}}
                            onClick={()=>{navigate(`/edit-user/${user.id}`)}}
                        >
                          <Edit/>  Edit
                        </Button> 

                        <Button
                        variant="contained"
                        color="error"
                        sx={{margin: 1}}
                        onClick={() => {
                            Delete(userId);
                        }}
                        >
                          <DeleteOutline/> {' '} Delete
                        </Button> 

                    </p>
                </div> 

                <div className="profile-details">
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.description}</p>
                </div>
                
            </div> }
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
        </div>
    )
}

export default Profile
