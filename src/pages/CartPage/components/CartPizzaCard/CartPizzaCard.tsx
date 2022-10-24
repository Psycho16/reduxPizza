import React from 'react'
import { ReactSVG } from 'react-svg'
import classNames from 'classnames'
import { useAppDispatch } from 'app/hooks'
import { addPizzaToCart, deletePizzaFromCart, removePizzaFromCart } from 'slices/cartSlice/cartSlice'

import { AddedPizza, PizzaInteractionData } from 'models/EntityModels/cart'
import { convertPizzaSize, convertPizzaType } from 'utils/deserializers'

import Icons from 'constants/Icons'

import styles from './styles.module.scss'


interface Props {
  pizza: AddedPizza
}

const CartPizzaCard = ({ pizza }: Props) => {
  const dispatch = useAppDispatch()

  const onAddPizzaToCart = (pizza: AddedPizza) => {
    dispatch(addPizzaToCart(pizza))
  }

  const onRemovePizzaFromCart = (pizza: PizzaInteractionData) => {
    dispatch(removePizzaFromCart(pizza))
  }

  const onDeletePizza = (pizza: PizzaInteractionData) => {
    dispatch(deletePizzaFromCart(pizza))
  }

  return (
    <article className={styles['pizza-card']}>
      <img src={pizza.image} alt={pizza.name} className={styles['pizza-img']} />

      <div className={styles['pizza-info-wrapper']}>
        <h3>{pizza.name}</h3>
        <h4 className={styles['pizza-info']}>
          {convertPizzaType(pizza.type)}, {convertPizzaSize(pizza.size)} см.
        </h4>
      </div>

      <div className={styles['counter-button-wrapper']}>
        <button
          className={classNames(styles['counter-button'], styles['pizza-card-button'])}
          onClick={() => onRemovePizzaFromCart(pizza)}
        >
          <ReactSVG src={Icons.minus} />
        </button>
        <span>{pizza.amount}</span>
        <button
          className={classNames(styles['counter-button'], styles['pizza-card-button'])}
          onClick={() => onAddPizzaToCart(pizza)}
        >
          <ReactSVG src={Icons.plus} />
        </button>
      </div>

      <h4>{pizza.price * pizza.amount} Р</h4>

      <button
        className={classNames(styles['pizza-card-button'], styles['delete-pizza-button'])}
        onClick={() => onDeletePizza(pizza)}
      >
        <ReactSVG src={Icons.cross} />
      </button>
    </article>
  )
}

export default CartPizzaCard
