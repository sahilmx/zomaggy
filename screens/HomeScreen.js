import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="featured"]{
      ...,
      restraunts[]->{
       ...,
        dishes[]->{
          
        }
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  return (
    <SafeAreaView style={tw`bg-white h-full pt-10`}>
      <View style={tw`flex-row pb-3 items-center mx-4`}>
        <Image
          style={tw`h-7 w-7 bg-gray-300 rounded-full mr-2`}
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        {/* <NavOptions/> */}
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now</Text>
          <Text style={tw`font-bold  text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View style={tw`flex-row items-center pb-2 mx-4 `}>
        <View style={tw`flex-row flex-1 bg-gray-200 p-4 rounded-lg `}>
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput
            placeholder="restraunts and cousines"
            keyboardType="defaults"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        {/* categories  */}
        <Categories />
    

        {/* featuredrows */}
        {featuredCategories?.map((category)=>(
               <FeatureRow
               key={category._id}
               id={category._id}
               title={category.name}
               description={category.short_description}
             />
        ))}

     
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
