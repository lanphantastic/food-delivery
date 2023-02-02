import { Text, SafeAreaView, View, Image, Platform, TextInput, ScrollView } from 'react-native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline'

import { Categories } from '../components/Categories'
import { Features } from '../components/Features'
import sanityClient from '../sanity'
import { Category } from '../models/category'

const HomeScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false)
  const [featuredCategories, setFeaturedCategories] = useState<Category[]>([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    sanityClient.fetch(`* [_type == "featured"] {
      ...,
      restaurants[] -> {
        ...,
        dishes[]->{
          
        }
      }
    }`).then((data) => setFeaturedCategories(data)).catch((error) => console.log('error here:', error)).finally(() => setLoading(false))
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5" style={{
      flex: 1,
      // backgroundColor: '#A6A9BC',
      paddingTop: Platform.OS === 'android' ? 50 : 0
    }}>
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>

        <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 p-4 bg-gray-300 rounded-3xl' />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Lan's Delivery!</Text>
          <Text className='font-bold text-xl'>Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon color="#00CCBB" />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
        <AdjustmentsHorizontalIcon color='#00CCBB' />
      </View>

      <ScrollView className="bg-neutral-100">
        {/* Body */}
        {/* Categories */}
        <>
          <Categories />

          {featuredCategories.map((featuredCategory) =>
            <Features
              key={featuredCategory._id}
              id={featuredCategory._id}
              title={featuredCategory.name}
              description={featuredCategory.short_description} />
          )}
        </>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen