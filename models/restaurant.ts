export interface Restaurant {
  _id: string
  _createdAt: string
  _rev: string
  _type: string
  _updatedAt: string
  address: string
  dishes: [[Object]]
  image: RestaurantImage
  lat: number
  long: number
  rating: number
  restaurants: string | null
  short_description: string
  title: string
  type: RestaurantType
}

export interface RestaurantImage {
  _type: string
  asset: [Object]
}

export interface RestaurantType {
  _ref: string
  _type: string
}
