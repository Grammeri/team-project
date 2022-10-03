import React from 'react'

import classes from './UserPhoto.module.css'

type VariantType = 'standard' | 'small'

export type UserPhotoPropsType = {
  variant: VariantType
}

export const UserPhoto = (props: UserPhotoPropsType) => {
  return <div className={`${classes.container} ${classes[props.variant]} ${classes.photoBox}`} />
}
