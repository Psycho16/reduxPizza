import React, { useEffect, useState } from 'react'

import PageTitle from 'components/ui/PageTitle'
import PizzaCard from 'components/entities/PizzaCard'
import { getPizzas } from 'api/pizzas'
import { PizzasResponseDTO } from 'models/apiModels/pizzas'
import { Pizza, Pizzas, PizzaSizeVariant, PizzaTypeVariant } from 'models/EntityModels/pizzas'
import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'

import Layout from '../../components/layout'

import styles from './styles.module.scss'


const deserializeAvailableSize = (availableSizes: PizzaSize[]): PizzaSizeVariant[] => {
  return availableSizes.map((availableSize) => {
    if (availableSize === PizzaSize.Small)
      return {
        id: PizzaSize.Small,
        value: '26 см'
      }

    if (availableSize === PizzaSize.Medium)
      return {
        id: PizzaSize.Medium,
        value: '30 см'
      }

    if (availableSize === PizzaSize.Large)
      return {
        id: PizzaSize.Large,
        value: '35 см'
      }

    return {
      id: PizzaSize.Small,
      value: '26 см'
    }
  })
}

const deserializeAvailableType = (availableTypes: PizzaType[]): PizzaTypeVariant[] => {
  return availableTypes.map((availableType) => {
    if (availableType === PizzaType.Default)
      return {
        id: PizzaType.Default,
        value: 'традиционное'
      }

    if (availableType === PizzaType.Thin) {
      return {
        id: PizzaType.Thin,
        value: 'тонкое'
      }
    }

    return {
      id: PizzaType.Default,
      value: 'традиционное'
    }
  })
}

const deserializePizzas = (responseData: PizzasResponseDTO): Pizzas => {
  return {
    pizzas: responseData.pizzas.map((pizza) => {
      const { availableSizes, availableTypes, image, name, price } = pizza
      return {
        id: pizza._id,
        availableSizes: deserializeAvailableSize(availableSizes),
        availableTypes: deserializeAvailableType(availableTypes),
        image,
        name,
        price
      }
    })
  }
}

const IndexPage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([])
  useEffect(() => {
    getPizzas().then((resp) => {
      const deserializedPizzas = deserializePizzas(resp.data)
      setPizzas(deserializedPizzas.pizzas)
    })
  }, [])

  return (
    <Layout>
      <div className={styles['page-wrapper-root']}>
        <PageTitle text="Все пиццы" />
        <div className={styles['pizzas-wrapper']}>
          {pizzas.map(pizza => (
            <PizzaCard pizza={pizza} key={pizza.id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
