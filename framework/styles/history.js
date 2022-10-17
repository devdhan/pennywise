import { StyleSheet } from "react-native";
import { Theme } from "../componenets/Theme";

export const styles = StyleSheet.create({
    top:{
        height:35,
        width:'100%' ,
        backgroundColor:'red'
    },
    refresh:{

    },
    refreshText:{
        textAlign:'center',
        color:"grey",
        fontSize:Theme.fonts.fontSize.caption
    },
    date:{
        textAlign:'center',
        paddingTop:20
    },
    arrow:{
        resizeMode:'contain',
        height:30,
        width:30
    },
    transDate:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    transDateText:{
        fontSize:Theme.fonts.fontSizePoint[1],
        color:'grey',
        marginLeft:5,
    },
    price:{
        color:'red'
    },
    price1:{
        color:'green'
    },
    trans:{
        marginTop:10
    },
    transText:{
        marginLeft:5,
        marginBottom:3,
        fontSize:Theme.fonts.fontSize.button
    },
    transText1:{
        marginLeft:5,
        fontSize:Theme.fonts.fontSize.caption,
        color:'gray'
    },
    line:{
        borderBottomWidth:1.5,
        borderColor:'red',
        marginVertical:5
    },
})