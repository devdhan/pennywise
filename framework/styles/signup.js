import { StyleSheet } from "react-native";
import { Theme } from "../componenets/Theme";

export const styles = StyleSheet.create({
    header:{

    },
    headerIntroText:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        color:'black',
    },
    brandLine:{

    },
    brandName:{
        fontSize:Theme.fonts.fontSizePoint.h4,
        color:Theme.colors.ui.brandPurple,
        fontWeight:'bold'
    },
    formArea:{
        marginVertical:Theme.sizes[3]
    },
    input:{
        marginBottom:Theme.sizes[1],
        marginTop:Theme.sizes[2]
    },
    signAlt:{
        flexDirection:'row',
    },
    altInfo:{

    },
    altActionText:{

    },
    privacy:{
        alignItems:'flex-end',
        justifyContent:'center',
    },
    privacyText:{
        fontSize:10
    },
    errorMessage:{
        fontSize:Theme.fonts.fontSize.caption,
        color:'red',
    },
})