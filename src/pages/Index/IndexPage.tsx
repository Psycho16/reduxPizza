import React from 'react'
import { useGetPizzasQuery } from 'slices/pizzasSlice/pizzaApi'

import PageTitle from 'components/ui/PageTitle'
import PizzaCard from 'components/entities/PizzaCard'

import Layout from '../../components/layout'

import styles from './styles.module.scss'


const IndexPage = () => {
  const { data, isLoading } = useGetPizzasQuery('pizzas')

  return (
    <Layout>
      <div className={styles['page-wrapper-root']}>
        <PageTitle text="Все пиццы" />
        {isLoading && <div>Загрузка</div>}
        {!isLoading && (
          <section className={styles['pizzas-wrapper']}>
            {data?.pizzas.map(pizza => (
              <PizzaCard pizza={pizza} key={pizza.id} />
            ))}
          </section>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
