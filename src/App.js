import React, { useState } from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { CreateUser } from './CreateUser'
import UserList from './userList'
 import Profile from './profile'
 import EditUser from './editUser'
 import EditProfile from './editProfile'
import Dashboard from './dashboard'
import './App.css'


function App() {

    const userDatas=[
        {
            "id":"0101",
            "username":"sam",
            "name":"Sanjeevkumar M",
            "email" : "Sanjeevmanagutti@gmail.com",
            "description":"description of user",
            "gender":"male",
            "profile": 3
        },
        {
            "id":"0102",
            "username":"Sam2",
            "name":"Sanjeev",
            "email" : "sanjeevsam158@gmail.com",
            "description":"description of user",
            "gender":"male",
            "profile": null
        },
        {
            "id":"0103",
            "username":"Anu",
            "name":"Anushka",
            "email" : "anushka27@gmail.com",
            "description":"description of user",
            "gender": "female",
            "profile": 2
        },
        {
            "id":"0104",
            "username":"Sarika",
            "name":"Sarika",
            "email" : "sarika@gmail.com",
            "description":"description of user",
            "gender": "female",
            "profile": null
        }
    ];
    const [users, setUsers] = useState(userDatas)
    
    return (<>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Dashboard users={users} setUsers={setUsers} />} />
                   <Route exact path="/users" element={<UserList  users={users} setUsers={setUsers}/>} />
                    <Route exact path="/create-user" element={<CreateUser  users={users} setUsers={setUsers}/>} />
                     <Route exact path="/profile/:userId" element={<Profile users={users} setUsers={setUsers}/>} />
                    <Route exact path="/edit-user/:editId" element={<EditUser users={users} setUsers={setUsers} />} />
                    <Route exact path="/edit-profile/:profileId" element={<EditProfile users={users} setUsers={setUsers}/>} />  
                </Routes>
            </Router>
        </>);
}


export default App
