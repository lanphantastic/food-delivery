import { Restaurant } from '../models/restaurant'

export const RestaurantsMock = [
  {
    _createdAt: '2023-01-31T21:01:56Z',
    _id: '8b672992-2ab7-4607-9af8-98b542937dbb',
    _rev: 'azcQcnmdQFJxU0cYoWVhAA',
    _type: 'restaurant',
    _updatedAt: '2023-01-31T21:11:22Z',
    address: '2216 Bloor St W, Toronto, ON M6S 1N4',
    dishes: [[Object]],
    image: { _type: 'image', asset: [Object] },
    lat: 43.65203270134719,
    long: -81.4760478693106,
    rating: 5,
    restaurants: null,
    short_description: 'Juicy and booster from the cold',
    title: 'Kinton Ramen',
    type: { _ref: '544c6314-e231-4e9c-9a5e-1cb3122f6a53', _type: 'reference' },
  },
  {
    _createdAt: '2023-02-02T01:20:05Z',
    _id: 'a368a192-b0af-43b8-9c80-ae2bd3084797',
    _rev: 'gdjMssMZ7IkxJDaXM7WfzF',
    _type: 'restaurant',
    _updatedAt: '2023-02-02T01:20:05Z',
    address: '150 N Queen St Unit D1, Etobicoke, ON M9C 1A8',
    dishes: [[Object]],
    image: { _type: 'image', asset: [Object] },
    lat: 43.62013207735801,
    long: -79.55425252369133,
    rating: 3,
    restaurants: null,
    short_description:
      "Nando's is a South African multinational fast casual chain that specialises in flame-grilled peri-peri style chicken.",
    title: 'Nando',
    type: { _ref: '315e34f0-22e4-4690-b9ba-23b9bac8e413', _type: 'reference' },
  },
] as Restaurant[]
