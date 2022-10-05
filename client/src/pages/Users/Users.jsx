import React from 'react'
import { useLocation } from 'react-router-dom'
import './Users.css'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import UsersList from './UsersList'

const Users = () => {
    const location=useLocation();
  return (
    <div className='home-container-1'>
        <LeftSideBar/>
        <div className="home-container-2">
            <h1 style={{"font-weight":400}}>Users</h1>
            <UsersList/>
             
        </div>
    </div>
  )
}

export default Users