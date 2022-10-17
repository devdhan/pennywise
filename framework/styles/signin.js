import { StyleSheet } from "react-native";
import { Theme } from "../componenets/Theme";

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{

    },
    loginIntro:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        color:'black',
        textAlign:'center'
    },
    input:{
        marginBottom:Theme.sizes[3],
        marginTop:Theme.sizes[1]
    },
    history:{
        marginTop:20
    },
    historyText:{
        textAlign:'center',
        fontSize:Theme.fonts.fontSize.caption
    }

})