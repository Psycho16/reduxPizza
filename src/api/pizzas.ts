import { AxiosResponse } from 'axios'

import { PizzasResponseDTO } from 'models/apiModels/pizzas'
import { http } from 'services/http'


export const getPizzas = () => http.get<AxiosResponse<PizzasResponseDTO>, AxiosResponse<PizzasResponseDTO>>('/pizzas')
