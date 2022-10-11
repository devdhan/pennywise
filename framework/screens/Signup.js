import { useContext, useState } from "react";
import { AppContext } from "../../globals/AppContext";
import { View, Text, Button } from "react-native";

export const Signup = ({navigation}) => {
    const {userUID, userEmail, setUserEmail} = useContext(AppContext);

    return (
        <View>
            <Text>Signup email is {userEmail}</Text>
        
        </View>
    )
}