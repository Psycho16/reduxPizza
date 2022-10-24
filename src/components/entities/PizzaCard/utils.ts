import { PizzaSize } from 'models/apiModels/ApiEntities/pizzas'


export const getPriceBySize = (price: number, chosenSize: PizzaSize) => {
  if (chosenSize === PizzaSize.Small) return price

  if (chosenSize === PizzaSize.Medium) return Math.floor(price * 1.25)

  if (chosenSize === PizzaSize.Large) return Math.floor(price * 1.5)

  return price
}
