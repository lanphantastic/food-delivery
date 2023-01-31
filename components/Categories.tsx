import { ScrollView } from 'react-native'

import { CategoryCard } from './CategoryCard'

export const Categories: React.FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15, paddingTop: 15
      }}
    >
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="hi there" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="hi there2" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="hi there3" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="hi there4" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="hi there5" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="hi there6" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="hi there7" />
    </ScrollView>
  )
}

