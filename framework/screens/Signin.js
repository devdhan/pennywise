import { View, Text, Button } from "react-native";

export const Signin = ({navigation, route}) => {
    const {FirstName, LastName} = route.params
    return (
        <View>
            <Text>my name is {FirstName}</Text>
        </View>
    )
}