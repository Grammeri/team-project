import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import ErrorImg from '../../assets/images/Error404.jpg'
import { Login } from '../../features/Login/Login'
import { NewPassword } from '../../features/NewPassword'
import { PasswordRecovery } from '../../features/PasswordRecovery'
import { Profile } from '../../features/Profile'
import { Registration } from '../../features/Registration'

type ContentPropsType = {}

export const Content = (props: ContentPropsType) => {
  return (
    <>
      <div className="content">
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Profile" element={<Profile />} />
          <Route
            path="404"
            element={<img style={{ display: 'flex', justifyContent: 'center' }} src={ErrorImg} />}
          />
          <Route path="*" element={<Navigate to={'404'} />} />
          <Route path="PasswordRecovery" element={<PasswordRecovery />} />
          <Route path="NewPassword" element={<NewPassword />} />
        </Routes>
      </div>
    </>
  )
}
