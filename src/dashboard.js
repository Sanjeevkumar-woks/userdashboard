import React from 'react'
import { Link } from 'react-router-dom'
import UserList from './userList'
function Dashboard({users,setUsers}) {
    
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <hr/>
                <div className='users'>
                    <h1><Link to="/users" style={{textDecoration:"none"}} > Users </Link>- {users.length} </h1> 
                </div>
             <UserList users={users} setUsers={setUsers}/>    
        </div>
    );
}

export default Dashboard
