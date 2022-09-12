import React from 'react'

import Icons from 'constants/Icons'

import styles from './styles.module.scss'


const Header = () => {
  return (
    <header className={styles['header-root']}>
      <div className={styles['wrapper']}>
        <div className={styles['logo-wrapper']}>
          <img src={Icons.pizzaLogo} alt="pizza-logo" className={styles['pizza-logo']} />
          <div className={styles['logo-info']}>
            <h2 className={styles['logo-title']}>Pizza</h2>
            <h3 className={styles['logo-text']}>Самая реактивная пицца</h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
