import React from 'react'
import { ReactSVG } from 'react-svg'

import styles from './styles.module.scss'


interface Props {
  text: string
  icon?: string
}
const PageTitle = ({ text, icon }: Props) => {
  return (
    <h1 className={styles['title-root']}>
      {icon && <ReactSVG src={icon} className={styles['title-icon']} wrapper="span" />}
      {text}
    </h1>
  )
}

export default PageTitle
