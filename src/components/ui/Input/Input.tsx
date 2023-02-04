import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import styles from './styles.module.scss'


interface Props {
  register: UseFormRegisterReturn
  fieldName: string
  placeholder: string
  className?: string
  type?: 'text' | 'email'
  value?: string | number
  isDisabled?: boolean
  isRequired?: boolean
  onClearError?: () => void
}

const Input = ({ register, placeholder, fieldName, type, isDisabled, className, value }: Props) => {
  return (
    <label className={`${styles['label']} ${className}`}>
      <h4 className={styles['field-name']}>{fieldName}</h4>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        autoComplete="off"
        className={styles['input']}
        {...register}
      />
    </label>
  )
}

export default Input
