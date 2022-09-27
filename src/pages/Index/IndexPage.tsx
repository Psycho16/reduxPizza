import React, { useEffect, useState } from 'react'

import PageTitle from 'components/ui/PageTitle'
import PizzaCard from 'components/entities/PizzaCard'
import { http } from 'services/http'
import { getPizzas } from 'api/pizzas'
import { PizzasResponseDTO } from 'models/apiModels/pizzas'
import { Pizza, Pizzas } from 'models/EntityModels/pizzas'

import Layout from '../../components/layout'

import styles from './styles.module.scss'


const deserializePizzas = (responseData: PizzasResponseDTO): Pizzas => {
  return {
    pizzas: responseData.pizzas.map((pizza) => {
      const { availableSizes, availableTypes, image, name, price } = pizza
      return {
        id: pizza._id,
        availableSizes,
        availableTypes,
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
            <PizzaCard pizzaName={pizza.name} img={pizza.image} key={pizza.id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
