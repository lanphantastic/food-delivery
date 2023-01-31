import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { RestaurantCard } from './RestaurantCard'

interface props {
  id: string | number
  title: string
  description: string
}

export const Features: React.FC<props> = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className="font-bold text-xl">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }} className='pt-4'>
        <RestaurantCard
          id={1}
          title="Kinton Ramen"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main street"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0} />
       <RestaurantCard
          id={1}
          title="Kinton Ramen"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main street"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0} />
       <RestaurantCard
          id={1}
          title="Kinton Ramen"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main street"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0} />
      </ScrollView>
    </View>
  )
}