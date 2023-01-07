import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import Images from 'constants/images'
import { Paths } from 'constants/routes'

import styles from './styles.module.scss'


const EmptyCart = () => {
  return (
    <div className={styles['wrapper']}>
      <h2 className={styles['title']}>Корзина пуста 😕</h2>
      <p className={styles['description']}>
        Вероятней всего, вы не добавляли пиццу в корзину. Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <img src={Images.emptyCart} alt="Пустая корзина" className={styles['img']} width={300} height={255} />

      <Link to={Paths.INDEX} className={classNames('button', styles['back-link'])}>
        На главную
      </Link>
    </div>
  )
}

export default EmptyCart
