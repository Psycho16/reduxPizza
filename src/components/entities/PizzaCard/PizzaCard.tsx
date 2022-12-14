import React, { useState } from 'react'
import { useAppDispatch } from 'app/hooks'
import { addPizzaToCart } from 'slices/cartSlice/cartSlice'
import toast from 'react-hot-toast'

import VariantBar from 'components/ui/VariantBar'
import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'
import { Pizza, PizzaInfo } from 'models/EntityModels/pizzas'
import Button from 'components/ui/Button'

import styles from './styles.module.scss'
import { allSizes, allTypes } from './consts'
import { getPriceBySize } from './utils'


interface Props {
  pizza: Pizza
}

const PizzaCard = ({ pizza }: Props) => {
  const { image, name, price, availableSizes, availableTypes, id } = pizza
  const dispatch = useAppDispatch()

  const [currentPizza, setCurrentPizza] = useState<PizzaInfo>({
    size: availableSizes[0].id,
    type: availableTypes[0].id
  })

  const setCurrentPizzaInfo = (id: PizzaSize | PizzaType) => {
    if (id === PizzaType.Thin || id == PizzaType.Default) {
      setCurrentPizza(prev => ({ size: prev.size, type: id }))
    }

    if (id === PizzaSize.Small || id == PizzaSize.Medium || id === PizzaSize.Large) {
      setCurrentPizza(prev => ({ size: id, type: prev.type }))
    }

    return
  }

  const onAddPizzaToCart = () => {
    const size = currentPizza.size
    const type = currentPizza.type
    const calculatedPrice = getPriceBySize(price, size)

    toast.success(`Пицца "${name}" успешно добавлена в корзину`)

    dispatch(
      addPizzaToCart({
        size,
        type,
        name,
        price: calculatedPrice,
        image,
        id,
        amount: 1
      })
    )
  }

  return (
    <article className={styles['pizza-card-root']}>
      {image ? (
        <img className={styles['pizza-img']} src={image} alt={name} />
      ) : (
        <div className={styles['pizza-empty-img']} />
      )}
      <h4 className={styles['pizza-name']}>{name}</h4>
      <div className={styles['variant-bars-wrapper']}>
        <VariantBar
          variants={allTypes}
          acceptedVariants={availableTypes}
          onSetVariant={setCurrentPizzaInfo}
          currentPizzaInfo={currentPizza}
        />
        <VariantBar
          variants={allSizes}
          acceptedVariants={availableSizes}
          onSetVariant={setCurrentPizzaInfo}
          currentPizzaInfo={currentPizza}
        />
      </div>

      <div className={styles['price-wrapper']}>
        <span className={styles['price']}>{getPriceBySize(price, currentPizza.size)}Р</span>
        <Button text={'Добавить'} onClick={onAddPizzaToCart} />
      </div>
    </article>
  )
}

export default PizzaCard
