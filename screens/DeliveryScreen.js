import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestraunt } from "../slices/restrauntSlice";
import tw from "tailwind-react-native-classnames";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
import { Marker } from "react-native-svg";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restraunt = useSelector(selectRestraunt);

  return (
    <View style={tw`bg-green-300 flex-1`}>
      <SafeAreaView style={tw`z-50 `}>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text style={tw`font-light text-white text-lg `}>Order Help </Text>
        </View>
        <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md `}>
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
              <Text style={tw`text-4xl font-bold`}>45-55 minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              style={tw`h-20 w-20`}
            />
          </View>
          <Progress.Bar size={30} color={"#00ccbb"} indeterminate={true} />
          <Text style={tw`mt-3 text-gray-500`}>
            Your order at {restraunt.title} is being Prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restraunt.lat,
          longitude: restraunt.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        style={tw`flex-1 -mt-12 z-0`}
      >
        <Marker
        coordinate={{
          latitude:restraunt.lat,
          longitude:restraunt.long,
        }}
        title={restraunt.title}
        description={restraunt.short_description}
        identifier="origin"
        pinColor="#00ccbb"
        />
      </MapView>

      <SafeAreaView style={tw`bg-white flex-row items-center h-28 `}>
        <Image source={{
          uri: "https://links.papareact.com/wru",
        }} 
        style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5 mx-4 `}
        />
        <View style={tw`flex-1`}>
        <Text style={tw`text-lg `}>Rakesh Kumar </Text>
        <Text style={tw`text-gray-400  `} >Your Rider  </Text>
        </View>
        <Text style={tw`text-green-300 text-lg mr-5 font-bold`}>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
