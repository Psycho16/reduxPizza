import { useAppDispatch, useAppSelector } from 'app/hooks'
import { clearCart } from 'slices/cartSlice/cartSlice'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import Layout from 'components/layout'
import PageTitle from 'components/ui/PageTitle'
import Button from 'components/ui/Button'

import Icons from 'constants/Icons'
import { Paths } from 'constants/routes'

import styles from './styles.module.scss'
import CartPizzaCard from './components/CartPizzaCard'
import EmptyCart from './components/EmptyCart'


const CartPage = () => {
  const dispatch = useAppDispatch()
  const { addedPizzas, totalCount, totalPrice } = useAppSelector(state => state.cart)

  const onClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <Layout>
      {addedPizzas.length > 0 && (
        <div className={styles['cart-container']}>
          <header className={styles['heading-wrapper']}>
            <PageTitle text="Корзина" icon={Icons.cartIcon} />
            <button className={styles['clear-cart-button']} onClick={onClearCart}>
              <ReactSVG src={Icons.trash} />
              Очистить корзину
            </button>
          </header>
          <div className={styles['pizzas']}>
            {addedPizzas.map((addedPizza) => {
              return <CartPizzaCard pizza={addedPizza} key={addedPizza.id + addedPizza.size + addedPizza.type} />
            })}
          </div>

          <div className={classNames(styles['total-wrapper'], styles['wrapper'])}>
            <h4>
              Всего пицц: <span className={styles['decor']}>{totalCount} шт.</span>
            </h4>
            <h4>
              Сумма заказа: <span className={classNames(styles['decor'], styles['price-decor'])}>{totalPrice} Р</span>
            </h4>
          </div>
          <div className={styles['wrapper']}>
            <Link to={Paths.INDEX} className={classNames('button', styles['back-link'])}>
              <ReactSVG src={Icons.back} />
              Вернуться на главную
            </Link>

            <Button onClick={() => console.log('оплатить сейчас')} text={'оплатить сейчас'} />
          </div>
        </div>
      )}
      {addedPizzas.length === 0 && <EmptyCart />}
    </Layout>
  )
}

export default CartPage
