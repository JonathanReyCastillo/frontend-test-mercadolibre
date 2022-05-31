import axios from 'axios'
import { API_URL } from '../../constants/appConstants'

export async function itemsList(search: string) {
  const { data } = await axios.get(`${API_URL}/items?q=${search}`)
  return data
}

export async function itemDetails(id: string) {
  const { data } = await axios.get(`${API_URL}/items/${id}`)
  return data
}

export function currencyFormat(price: number, decimals: number) {
  return '$' + price.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
