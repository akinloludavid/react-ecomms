/**
 * Properties required of a route
 * @type
 */
export type AppRoute = {
  path: string
  element: React.ReactNode
}

export interface IGetAllProducts {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number; count: number }
  title: string
}
