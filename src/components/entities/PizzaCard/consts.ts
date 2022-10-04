import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'


export const allSizes = [
  {
    id: PizzaSize.Small,
    value: '26 см'
  },
  {
    id: PizzaSize.Medium,
    value: '30 см'
  },
  {
    id: PizzaSize.Large,
    value: '40 см'
  }
]

export const allTypes = [
  {
    id: PizzaType.Thin,
    value: 'тонкое'
  },
  {
    id: PizzaType.Default,
    value: 'традиционное'
  }
]
