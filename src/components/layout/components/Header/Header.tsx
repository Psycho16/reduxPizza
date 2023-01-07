import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from 'app/hooks'

import Icons from 'constants/Icons'
import { Paths } from 'constants/routes'

import styles from './styles.module.scss'


const Header = () => {
  const location = useLocation()
  const showCart = location.pathname === Paths.INDEX

  const { totalCount, totalPrice } = useAppSelector(state => state.cart)

  return (
    <header className={styles['header-root']}>
      <div className={styles['wrapper']}>
        <Link to={Paths.INDEX}>
          <div className={styles['logo-wrapper']}>
            <img src={Icons.pizzaLogo} alt="pizza-logo" className={styles['pizza-logo']} />
            <div className={styles['logo-info']}>
              <h2 className={styles['logo-title']}>Redux Pizza</h2>
              <h3 className={styles['logo-text']}>Самая реактивная пицца</h3>
            </div>
          </div>
        </Link>

        {showCart && (
          <Link to={Paths.CART} className={styles['cart-link']}>
            <span className={styles['cart-info-text']}>{totalPrice} Р</span>
            <span className={styles['cart-info-divider']} />
            <div className={styles['cart-info-icon-wrapper']}>
              <img src={Icons.cartIcon} alt="pizza-logo" className={styles['cart-icon']} />
              <span className={styles['cart-info-text']}>{totalCount}</span>
            </div>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
