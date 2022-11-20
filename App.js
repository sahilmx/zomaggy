import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//redux
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import MapScreen from "./screens/MapScreen";
import RestrauntScreen from "./screens/RestrauntScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import LoginSignupScreen from "./screens/LoginSignupScreen";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
            <Stack.Screen
            name="initScreen"
            component={LoginSignupScreen}
            options={{
              headerShown: false,
            }}
          />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{}}
              />
              <Stack.Screen
                name="Restraunt"
                component={RestrauntScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Basket"
                component={BasketScreen}
                options={{
                  headerShown: false,
                  presentation: "modal",
                }}
              />
              <Stack.Screen
                name="PreparingOrder"
                component={PreparingOrderScreen}
                options={{
                  headerShown: false,
                  presentation: "fullScreenModal",
                }}
              />
              <Stack.Screen
                name="Delivery"
                component={DeliveryScreen}
                options={{
                  headerShown: false,
                  presentation: "fullScreenModal",
                }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
