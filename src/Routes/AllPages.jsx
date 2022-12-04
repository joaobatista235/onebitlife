import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Stack from "../Pages/Start"

const Start = createNativeStackNavigator()

export default function AllPages() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    { headerShown: false }
                }
            >
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}