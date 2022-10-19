import { ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView className='flex-row '
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard title="All" />
            <CategoryCard title="Health" />
            <CategoryCard title="Education" />
            <CategoryCard title="Environment" />
            <CategoryCard title="Children" />
            <CategoryCard title="Women" />

        </ScrollView>
    )
}

export default Categories