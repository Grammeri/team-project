import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import ErrorImg from '../../assets/images/Error404.jpg'
import { CreateNewPassword } from '../../features/CreateNewPassword/CreateNewPassword'
import { ForgotPassword } from '../../features/ForgotPassword/ForgotPassword'
import { Login } from '../../features/Login/Login'
import { Profile } from '../../features/Profile/Profile'
import { SignUp } from '../../features/SignUp/SignUp'

type ContentPropsType = {}

export const Content = (props: ContentPropsType) => {
  return (
    <>
      <div className="content">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="404"
            element={<img style={{ display: 'flex', justifyContent: 'center' }} src={ErrorImg} />}
          />
          <Route path="*" element={<Navigate to={'404'} />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="createNewPassword" element={<CreateNewPassword />} />
        </Routes>
      </div>
    </>
  )
}
