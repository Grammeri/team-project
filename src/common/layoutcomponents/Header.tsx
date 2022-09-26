import * as React from 'react'
import '../../app/App.css'

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core'

import { logoutTC } from '../../features/Login/auth-reducer'
import { useAppDispatch, useAppSelector } from '../../store/hooks/Hooks'

export const Header = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  const logoutHandler = () => {
    console.log('logouthandler')
    dispatch(logoutTC())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IT INCUBATOR
          </Typography>
          {isLoggedIn && (
            <Button color="inherit" onClick={logoutHandler}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
