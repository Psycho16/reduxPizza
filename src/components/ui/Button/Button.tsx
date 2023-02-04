import React, { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'


interface Props {
  text: string | ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  isDisabled?: boolean
  variant?: 'gray' | 'orange'
  active?: boolean
  className?: string
}

const Button = ({ text, onClick, isDisabled, variant = 'orange', active = false, className }: Props) => {
  return (
    <button
      disabled={isDisabled}
      className={classNames(
        'button',
        variant === 'orange' && styles['orange-button'],
        variant === 'gray' && styles['gray-button'],
        active && styles['gray-button--active'],
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
