import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import tw from "tailwind-react-native-classnames";
import RestrauntCard from "./RestrauntCard";
import client from "../sanity";

const FeatureRow = ({ id, title, description }) => {
  const [restraunts, setRestraunts] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type=="featured" && _id==$id]{
      ...,
      restraunts[]->{
       ...,
        dishes[]->,
    type->{
      name
    }
      },
    }[0]`, {id}).then(data=>{
      setRestraunts(data.restraunts);
    });

  }, []);
  
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      showsHorizontalScrollIndicator={false}
      style={tw`pt-4`}
      >
        {restraunts?.map((restraunt)=>(
          <RestrauntCard
          key={restraunt._id}
          id={restraunt._id}
          imgUrl={restraunt.image}
          title={restraunt.name}
          rating={restraunt.rating}
          genere={restraunt.type?.name}
          address={restraunt.address}
          short_description={restraunt.short_description}
          dishes={restraunt.dishes}
          long={restraunt.long}
          lat={restraunt.lat}
        
          />)
        )} 
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
