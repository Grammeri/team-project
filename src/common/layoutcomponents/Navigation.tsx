import React from 'react'

import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="Login">Login</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="Registration">Registration</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="Profile">Profile</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="Error404">Error404</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="PasswordRecovery">PasswordRecovery</NavLink>
      </Button>

      <Button size="small" variant="contained" style={{ backgroundColor: 'white', margin: '1px' }}>
        <NavLink to="NewPassword">NewPassword</NavLink>
      </Button>
    </div>
  )
}
