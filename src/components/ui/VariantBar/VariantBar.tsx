import React from 'react'
import classNames from 'classnames'

import { PizzaSizeVariant, PizzaTypeVariant, PizzaInfo } from 'models/EntityModels/pizzas'
import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'

import styles from './styles.module.scss'


interface Props {
  variants: PizzaSizeVariant[] | PizzaTypeVariant[]
  acceptedVariants: PizzaSizeVariant[] | PizzaTypeVariant[]
  onSetVariant: (id: PizzaSize | PizzaType) => void
  currentPizzaInfo: PizzaInfo
}
const VariantBar = ({ variants, acceptedVariants, onSetVariant, currentPizzaInfo }: Props) => {
  const acceptedVariantIds = acceptedVariants.map(acceptedVariant => acceptedVariant.id)
  return (
    <div className={styles['variants-bar-root']}>
      {variants.slice(0, 3).map(variant => (
        <button
          className={classNames(
            styles['variant'],
            !acceptedVariantIds.includes(variant.id) ? styles['variant-disabled'] : '',
            currentPizzaInfo.size === variant.id || currentPizzaInfo.type === variant.id ? styles['variant-chosen'] : ''
          )}
          key={variant.id}
          onClick={() => onSetVariant(variant.id)}
        >
          {variant.value}
        </button>
      ))}
    </div>
  )
}

export default VariantBar
