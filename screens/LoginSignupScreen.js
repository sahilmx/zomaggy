import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { TextInput } from "react-native";

const LoginSignupScreen = () => {
    const [number, onChangeNumber] = useState(null);
    const [text, setText] = useState('');

    function handleChange(e){
        Alert.alert("THis is ");
    }
    return (
    <SafeAreaView>
      <View style={tw`items-center p-4 my-10 relative`}>
        <View style={tw``}>
          <Image
            source={require("../assets/icon.png")}
            style={tw`h-40 w-40 my-5  mx-6 mb-32`}
          />
          <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
          <TextInput
          placeholder="useless placeholder"
          keyboardType="default"
          onPress={handleChange}
          style={tw`border rounded-md my-5 px-2 py-1`}
        />
          <TouchableOpacity
            style={tw`rounded-md py-2 px-5  bg-green-300 items-center`}
          >
            <Text style={tw`text-lg text-white font-bold`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`rounded-md py-2 px-5  bg-green-300 items-center my-5`}
          >
            <Text style={tw`text-lg text-white font-bold`}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSignupScreen;
