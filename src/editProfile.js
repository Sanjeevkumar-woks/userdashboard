import { CheckCircle } from '@mui/icons-material'
import { Badge, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Img } from './userList'

function EditProfile({users,setUsers}) {
    
    let {profileId} = useParams()
    let navigate = useNavigate()
    let [selectId, setSelectId] = useState(null)
    let [avatar, setAvatar] = useState([
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        }
    ])
    
    let avatarTemp= [
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        }
    ]
    const userdata= users.find(user=> user.id === profileId)

    const select = id =>{
        avatarTemp[id].isSelected = avatar[id].isSelected? false: true
        setAvatar([...avatarTemp])  
        setSelectId(id+1)
    }

    const submitPic = (id) =>{
        let finalData ={...userdata, profile : id}
        users = users.filter(user=> user.id !== profileId)
        setUsers([...users, finalData])
        navigate(`/profile/${profileId}`)
    }

    return (
        <div className="App-header"
            style={{
                justifyContent:"center",
                alignItems:"center",
            }}
        >
            <h1>{userdata.name}</h1>
            <b>Select Your Profile Picture</b>

            <div className="profile-collection-container" >
                
                {avatar.map(({isSelected}, id)=>(
                    <Badge
                        badgeContent={isSelected? <CheckCircle color="primary" /> : 0}
                        overlap="circular"
                        sx={{
                            margin:"2%"
                        }}
                        onClick={()=>{
                            select(id)
                        }}
                    >
                        <Img
                            id={id+1}
                            gender={userdata.gender}
                            sx={{
                                width:"200px",
                                height:"200px"
                                }}
                            className={isSelected? "selected":"avatar"}
                        />
                    </Badge>
                ))}
            </div>

            <Button
                variant="contained"
                onClick={()=>{
                    !selectId? alert('select something') : submitPic(selectId)
                }}
            >
                Select
            </Button>
            
        </div>
    );
}

export default EditProfile
