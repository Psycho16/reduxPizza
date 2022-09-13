import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Icons from 'constants/Icons'
import { Paths } from 'constants/routes'

import styles from './styles.module.scss'


const Header = () => {
  const location = useLocation()
  const isCartPage = location.pathname === Paths.CART

  return (
    <header className={styles['header-root']}>
      <div className={styles['wrapper']}>
        <div className={styles['logo-wrapper']}>
          <img src={Icons.pizzaLogo} alt="pizza-logo" className={styles['pizza-logo']} />
          <div className={styles['logo-info']}>
            <h2 className={styles['logo-title']}>Redux Pizza</h2>
            <h3 className={styles['logo-text']}>Самая реактивная пицца</h3>
          </div>
        </div>

        {!isCartPage && (
          <Link to={Paths.CART}>
            <a className={styles['cart-link']}>
              <span className={styles['cart-info-text']}>520 Р</span>
              <span className={styles['cart-info-divider']} />
              <div className={styles['cart-info-icon-wrapper']}>
                <img src={Icons.cartIcon} alt="pizza-logo" className={styles['cart-icon']} />
                <span className={styles['cart-info-text']}>3</span>
              </div>
            </a>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
