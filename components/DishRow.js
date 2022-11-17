import { View, Text ,TouchableOpacity,Image} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems ,addToBasket, selectedBaketItemsWithId,removeFromBasket} from "../slices/basketSlice";
const DishRow = ({  id, name, short_description, price, image }) => {
  
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items= useSelector((state)=> selectedBaketItemsWithId(state,id));

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, short_description, price, image}));

    };
    const removeItemFromBasket = () => {
        if(items.length === 0) return;

    dispatch(removeFromBasket({id}));
    };
    return (
        <>
    <TouchableOpacity style={tw`bg-white border p-4 border-gray-200  ${isPressed && "border-b-0"}`}
    onPress={()=> setIsPressed(!isPressed)}>
        <View style={tw`flex-row`}>
            <View style={tw`flex-1 pr-2`}>
        <Text style={tw`text-xl  mb-1`}>{name}</Text>
        <Text style={tw`text-gray-400`}>{short_description}</Text>
        <Text style={tw`text-gray-400 mt-2`}>
            <Currency quantity={price} currency="INR"/>
        </Text>
        </View>
       
        <View>
        <Image source={{

            uri:urlFor(image).url()
        }}
        style={tw`h-20 w-20 bg-gray-300 p-4 border-r border-gray-300 `}/>
    
    </View>
    </View>
    </TouchableOpacity>
        {isPressed && (
            <View style={tw`bg-white px-4`}>
                <View style={tw`flex-row items-center pb-3 `}>
                    <TouchableOpacity onPress ={removeItemFromBasket}  disabled={!items.length} style={tw`mr-1`}>
                        <MinusCircleIcon color={items.length>0? "#00ccbb": "gray" }  size={40}/>
                    </TouchableOpacity>
                    <Text>{items.length}</Text>
                    <TouchableOpacity onPress={addItemToBasket} style={tw`ml-1`}>
                        <PlusCircleIcon  color={"#00ccbb"} size={40}/>
                    </TouchableOpacity>

                </View>
            </View>
        )}
    </>
  );
};

export default DishRow;
