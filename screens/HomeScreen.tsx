import { Text, SafeAreaView, View, Image, Platform, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline'

import { Categories } from '../components/Categories'
import { Features } from '../components/Features'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
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

      <ScrollView >
        {/* Body */}
        {/* Categories */}
        <Categories />

        <Features id="1" title="Featured" description="Paid placements near you" />
        <Features id="2" title="Tasty Discounts" description="Everyone's been enjoying these juicy discounts" />
        <Features id="3" title="Offers near you!" description="Why not support your local restaurants tonight?" />

        {/* {FeatureMock.map((feature: FeatureRef) => {
          <Features title={feature.title} description={feature.description} id={feature.id} />
        })} */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen