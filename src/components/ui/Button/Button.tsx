import React, { ReactNode } from 'react'

import styles from './styles.module.scss'


interface Props {
  text: string | ReactNode
  onClick: () => void
  isDisabled?: boolean
}

const Button = ({ text, onClick, isDisabled }: Props) => {
  return (
    <button disabled={isDisabled} className={styles['button-root']} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
