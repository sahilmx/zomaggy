import { View, Text } from 'react-native'
import React, { useEffect ,useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

   useEffect(() => {
     
    setTimeout(() => navigation.navigate("Delivery"),4000);
     
    
   }, [])
   

  return (
    <SafeAreaView style={tw`bg-green-400 justify-center items-center flex-1`}>
      
      <Animatable.Image
      source={require("../assets/loading.gif")}
      animation="slideInUp"
      iterationCount={1}
      style={tw`h-72 w-72`}
      />
      <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            style={tw`text-lg my-10 text-white font-bold text-center`}
           >
            Waiting for the restraunts to Pick the Order
           </Animatable.Text>


           <Progress.Bar indeterminate={true} width={200} color={"white"} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen