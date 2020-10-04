import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://igt.shoppingcart.com' : 'http://localhost:4200'
export const productsUrl = '../assets/products.json'