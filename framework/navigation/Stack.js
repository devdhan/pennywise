import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup } from "../screens/Signup";
import { Signin } from "../screens/Signin";
import { History } from "../screens/History";

const Stack = createNativeStackNavigator();

export function StackNavigation () {
    return (
        <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
    )
}