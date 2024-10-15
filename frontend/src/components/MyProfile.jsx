/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className='account_components'>
      <h3>My Profile</h3>
      <div>
        <label>Full Name</label>
        <input type="text" value={user && user.name} onChange={(e) => e.target.value} disabled />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" value={user && user.email} onChange={(e) => e.target.value} disabled />
      </div>
      {
        user && user.role === "Job Seeker" && (
          <div>
            <label>My Preferred Job Niches</label>
            <div style={{display: "flex",flexDirection: "column",gap: "15px"}}>
              <input type="text" value={user && user.niches.firstNiche} onChange={(e) => e.target.value} disabled />
              <input type="text" value={user && user.niches.secondNiche} onChange={(e) => e.target.value} disabled />
              <input type="text" value={user && user.niches.thirdNiche} onChange={(e) => e.target.value} disabled />
            </div>
          </div>
        )
      }
      <div>
        <label>Phone Number</label>
        <input type="number" value={user && user.phone} onChange={(e) => e.target.value} disabled />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={user && user.address} onChange={(e) => e.target.value} disabled />
      </div>
      <div>
        <label>Role</label>
        <input type="text" value={user && user.role} onChange={(e) => e.target.value} disabled />
      </div>
      <div>
        <label>Joined On</label>
        <input type="text" value={user && user.createdAt?.substring(0,10)} onChange={(e) => e.target.value} disabled />
      </div>
    </div>
  )
}

export default MyProfile
