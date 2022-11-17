import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { urlFor } from "../sanity";
import tw from "tailwind-react-native-classnames";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestraunt } from "../slices/restrauntSlice";

const RestrauntScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genere,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(setRestraunt({
      id,
      imgUrl,
      title,
      rating,
      genere,
      address,
      short_description,
      dishes,
      long,
      lat,
    }))
  
    
  }, [])
  

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View style={tw`relative`}>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            style={tw`w-full h-60 bg-gray-300 p-4`}
          />
          <TouchableOpacity
            style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full `}
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color={"#00ccbb"} />
          </TouchableOpacity>
        </View>
        <View style={tw`bg-white`}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold capitalize`}>{title}</Text>
            <View style={tw`flex-row  my-1`}>
              <View style={tw`flex-row items-center `}>
                <StarIcon color={"green"} opacity={0.5} size={22} />
                <Text style={tw`text-xs text-gray-500 pl-1`}>
                  <Text style={tw`text-green-500 pr-1`}>{rating}</Text>.{" "}
                  {genere}
                </Text>
              </View>
              <View style={tw`flex-row items-center `}>
                <MapPinIcon color={"gray"} opacity={0.4} size={22} />
                <Text style={tw`text-gray-300 pr-1`}>Nearby . {address}</Text>
              </View>
            </View>
            <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
          </View>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-b border-t border-gray-300`}
          >
            <QuestionMarkCircleIcon color={"gray"} size={20} />
            <Text style={tw`pl-2 flex-1 text-base font-bold`}>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={"#00ccbb"} />
          </TouchableOpacity>
          <View style={tw`bg-gray-100 pb-36`}>
            <Text style={tw`px-4  pt-6 mb-3 font-bold text-xl`}>Menu</Text>

            {dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                short_description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestrauntScreen;
