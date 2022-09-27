import React, { useState } from 'react'

import VariantBar from 'components/ui/VariantBar'
import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'

import styles from './styles.module.scss'


interface Props {
  pizzaName: string
  img?: string
}

// export enum PizzaSize {
//   Small = 'small',
//   Medium = 'medium',
//   Large = 'large'
// }
// export enum PizzaType {
//   'thin',
//   'default'
// }

export interface PizzaInfo {
  size: PizzaSize
  type: PizzaType
}

export const pizzaSizes = [
  { id: PizzaSize.Small, value: '26 см' },
  { id: PizzaSize.Medium, value: '30 см' },
  { id: PizzaSize.Large, value: '35 см' }
] as const

export const pizzaTypes = [
  { id: PizzaType.thin, value: 'тонкое' },
  { id: PizzaType.default, value: 'традиционное' }
] as const

const PizzaCard = ({ img, pizzaName }: Props) => {
  const [currentPizza, setCurrentPizza] = useState<PizzaInfo>({ size: PizzaSize.Small, type: PizzaType.thin })

  // const setCurrentPizzaType = (type: PizzaType) => {
  //   setCurrentPizza(prev => ({ size: prev.size, type }))
  // }

  // const setCurrentPizzaSize = (size: PizzaSize) => {
  //   setCurrentPizza(prev => ({ size, type: prev.type }))
  // }
  const setCurrentPizzaInfo = (id: PizzaSize | PizzaType) => {
    if (id === PizzaType.thin || id == PizzaType.default) {
      setCurrentPizza(prev => ({ size: prev.size, type: id }))
    }

    if (id === PizzaSize.Small || id == PizzaSize.Medium || id === PizzaSize.Large) {
      setCurrentPizza(prev => ({ size: id, type: prev.type }))
    }

    return
  }

  return (
    <div className={styles['pizza-card-root']}>
      {img ? (
        <img className={styles['pizza-img']} src={img} alt={pizzaName} />
      ) : (
        <div className={styles['pizza-empty-img']} />
      )}
      <h4 className={styles['pizza-name']}>{pizzaName}</h4>
      <VariantBar variants={pizzaTypes} onSetVariant={setCurrentPizzaInfo} currentPizzaInfo={currentPizza} />
      <VariantBar variants={pizzaSizes} onSetVariant={setCurrentPizzaInfo} currentPizzaInfo={currentPizza} />
    </div>
  )
}

export default PizzaCard
