import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestraunt } from "../slices/restrauntSlice";
import {  removeFromBasket, selectBasketItems, selectBasketTotal  } from "../slices/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restraunt = useSelector(selectRestraunt);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);

  }, [items]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-green-300 bg-white shadow-md `}>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-gray-400 text-center`}>{restraunt.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
          >
            <XCircleIcon color={"#00ccbb"} height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center px-4 py-3 bg-white my-5`}>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 mr-4 rounded-full`}
          />
          <Text style={tw`flex-1`}>Delivery in 30-45 min</Text>

          <TouchableOpacity>
            <Text style={tw`text-green-300`}>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={tw`border-b border-t border-gray-300`}>
          {Object.entries(groupedItemsInBasket).map(([key, item]) => (
            <View
              key={key}
              style={tw`flex-row items-center bg-white py-2 px-5`}
            >
              <Text style={tw`text-green-500`}>{item.length} x</Text>
              <Image
                source={{
                  uri: urlFor(item[0]?.image).url(),
                }}
                style={tw`h-12 w-12 rounded-full mx-3`}
              />
              <Text style={tw`flex-1`}>{item[0]?.name}</Text>
              <Text tyle={tw`text-gray-600`}>
                <Currency quantity={item[0]?.price} currency={"INR"} />
              </Text>
              <TouchableOpacity>
                <Text
                  style={tw`text-green-500 mx-3`}
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={tw`bg-white p-5 mt-5 px-2`}> 
                <View style={tw`justify-between flex-row`}>
                  <Text style={tw`text-gray-400`}>Subtotal</Text>
                  <Text style={tw`text-gray-400`}>
                    <Currency quantity={basketTotal} currency={"INR"} />
                    
                  </Text>
                </View>
                <View style={tw`justify-between flex-row`}>
                  <Text style={tw`text-gray-400`}>Delivery Fee</Text>
                  <Text style={tw`text-gray-400`}>
                    <Currency quantity={20+basketTotal/35} currency={"INR"} />
                    
                  </Text>
                </View>
                <View style={tw`justify-between flex-row`}>
                  <Text style={tw`text-gray-400`}>Order Total </Text>
                  <Text style={tw`font-extrabold`}>
                    <Currency quantity={basketTotal+20+basketTotal/35} currency={"INR"} />
                    
                  </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("PreparingOrder")} style={tw`rounded-lg bg-green-500 p-4 m-3`}>
                  <Text style={tw`font-extrabold text-lg text-center text-white`}>Place Order</Text>
                </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
