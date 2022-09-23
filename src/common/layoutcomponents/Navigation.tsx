import React, { useEffect } from 'react'

import { Button } from '@material-ui/core'
import { NavLink, useNavigate } from 'react-router-dom'

import { setIsLoggedInAC } from '../../features/Login/auth-reducer'
import { useAppSelector } from '../../store/hooks/Hooks'

import styles from './Navigation.module.css'

export const Navigation = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate()

  /*  if (!isLoggedIn) {
    navigate('/login')
  }*/
  /*  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  })*/

  return (
    <div className={styles.nav}>
      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="login">Login</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="SignUp">SignUp</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="profile">Profile</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="404">Error404</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="forgotPassword">Forgot Password</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="createNewPassword">Create New Password</NavLink>
      </Button>
    </div>
  )
}
