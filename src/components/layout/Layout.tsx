import React, { ReactNode } from 'react'

import Header from './components/Header'
import styles from './styles.module.scss'


interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
