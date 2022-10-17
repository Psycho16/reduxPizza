export interface PizzaDTO {
  availableSizes: PizzaSize[]
  availableTypes: PizzaType[]
  image: string
  name: string
  price: number
  id: string
  category: number
}

export enum PizzaSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}
export enum PizzaType {
  Thin = 'thin',
  Default = 'default'
}
