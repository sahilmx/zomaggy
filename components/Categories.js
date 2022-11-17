import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import client, { urlFor } from '../sanity';

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => { 
    client.fetch(`*[_type == "category"]`).then(data=> setCategories(data));
  },[]);

  return (

    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,paddingTop:10
    }} horizontal
    showsHorizontalScrollIndicator={false}>
     

     {categories.map((category)=>(
        <CategoriesCard 
        key={category._id}
        imageUrl={urlFor(category.image).width(200).url()}
         title={category.title} />

      ))}

    </ScrollView>
  )
}

export default Categories