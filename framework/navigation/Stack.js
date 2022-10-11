import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";
import { Signup } from "../screens/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function StackNavigation () {
    return (
        <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}