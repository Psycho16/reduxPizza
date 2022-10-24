import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'


type PizzaId = string

export interface PizzaInteractionData {
  id: PizzaId
  size: PizzaSize
  type: PizzaType
}

export interface AddedPizza extends PizzaInteractionData {
  name: string
  price: number
  image: string
  amount: number
}
