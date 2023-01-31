import { Location } from './location'

export interface FeatureRef {
  id: number
  title: string
  description: string
}

export interface Feature extends FeatureRef, Location {
  imgUrl: string
  rating: number
  genre: string
  shortDescription: string
}
