import React, { useState } from 'react'
import { useGetPizzasQuery } from 'slices/pizzasSlice/pizzaApi'
import { useAppSelector } from 'app/hooks'

import PageTitle from 'components/ui/PageTitle'
import PizzaCard from 'components/entities/PizzaCard'

import Layout from '../../components/layout'

import styles from './styles.module.scss'
import CategoryFilter from './components/CategoryFilter'
import SortSelector from './components/SortSelector'


const getPizzasQuery = (queryParams: { sortType?: string }) => {
  return `?${queryParams.sortType ? `sortBy=${queryParams.sortType}&` : ''}`
}

const IndexPage = () => {
  const activeCategory = useAppSelector(state => state.filterPizzas.category)
  const sortType = useAppSelector(state => state.filterPizzas.sortType)
  const { data, isLoading } = useGetPizzasQuery(getPizzasQuery({ sortType: sortType.sortProperty }))

  return (
    <Layout>
      <div className={styles['filters-wrapper']}>
        <CategoryFilter />
        <SortSelector />
      </div>
      <div className={styles['page-wrapper-root']}>
        <PageTitle text="Все пиццы" />
        {isLoading && <div>Загрузка</div>}
        {!isLoading && (
          <section className={styles['pizzas-wrapper']}>
            {data?.pizzas
              .filter(
                pizza => pizza.category.categoryId === activeCategory.categoryId || activeCategory.categoryId === -1
              )
              .map(pizza => (
                <PizzaCard pizza={pizza} key={pizza.id} />
              ))}
          </section>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
