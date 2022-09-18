import React from 'react'

import styles from './Button.module.css'

export type ButtonPropsType = {
  callback: () => void
  btnName: string
}

export const Button = (props: ButtonPropsType) => {
  const onBtnClick = () => {
    props.callback()
  }

  return (
    <button className={styles.uniBtn} onClick={onBtnClick}>
      {props.btnName}
    </button>
  )
}
