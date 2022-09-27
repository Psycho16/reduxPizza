export interface PizzaDTO {
  availableSizes: PizzaSize[]
  availableTypes: PizzaType[]
  image: string
  name: string
  price: number
  _id: string
}

export enum PizzaSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}
export enum PizzaType {
  'thin',
  'default'
}
