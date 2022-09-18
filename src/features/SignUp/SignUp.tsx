import React from 'react'

import { useForm } from 'react-hook-form'

import styles from './SignUp.module.css'

export const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <div>
      <form>
        <input type="submit" />
      </form>
    </div>
  )
}
