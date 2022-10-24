import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'


export const convertPizzaSize = (pizzaSize: PizzaSize) => {
  if (pizzaSize === PizzaSize.Small) return 26

  if (pizzaSize === PizzaSize.Medium) return 30

  if (pizzaSize === PizzaSize.Large) return 40

  return 26
}
export const convertPizzaType = (pizzaType: PizzaType) => {
  if (pizzaType === PizzaType.Default) return 'традиционное'

  if (pizzaType === PizzaType.Thin) return 'тонкое'

  return 'традиционное'
}
