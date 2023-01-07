import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import styles from './styles.module.scss'


interface Props {
  register: UseFormRegisterReturn
  errorMessage?: string
  placeholder?: string
  className?: string
  type?: 'text' | 'number' | 'email'
  value?: string | number
  isDisabled?: boolean
  isRequired?: boolean
  onClearError?: () => void
}

const Input = ({ register, placeholder, type, isDisabled, className, value, errorMessage }: Props) => {
  return (
    <label className={`${styles['label']} ${className}`}>
      <span className={'visually-hidden'}>{placeholder}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        autoComplete="off"
        {...register}
      />
      {errorMessage && <span>Ошибка</span>}
    </label>
  )
}

export default Input
