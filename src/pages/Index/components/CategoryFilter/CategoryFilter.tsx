import { useAppDispatch, useAppSelector } from 'app/hooks'
import React from 'react'
import { resetCategory, setCategory } from 'slices/filterPizzasSlice/filterPizzasSlice'

import Button from 'components/ui/Button'
import { Category } from 'models/EntityModels/pizzas'

import styles from './styles.module.scss'


const CategoryFilter = () => {
  const { categories, category: activeCategory } = useAppSelector(state => state.filterPizzas)
  const dispatch = useAppDispatch()

  const onSetCategory = (category: Category) => {
    dispatch(setCategory(category))
  }

  const onResetCategory = () => {
    dispatch(resetCategory())
  }
  return (
    <div className={styles['category-filter-root']}>
      {
        <Button
          text={categories[0].categoryName}
          active={categories[0].categoryId === activeCategory.categoryId}
          onClick={onResetCategory}
          variant="gray"
        />
      }
      {categories.slice(1).map((category) => {
        const { categoryId, categoryName } = category
        return (
          <Button
            key={categoryId}
            text={categoryName}
            active={categoryId === activeCategory.categoryId}
            onClick={() => onSetCategory(category)}
            variant="gray"
          />
        )
      })}
    </div>
  )
}

export default CategoryFilter
