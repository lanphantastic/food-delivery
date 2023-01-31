import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface props {
  id: number
  title: string
}

const RestaurantCard: React.FC<props> = ({ id, title }) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default RestaurantCard