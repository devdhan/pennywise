import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";
import { AppSafeAreaView } from "../componenets/AppSafeAreaView";
import { styles } from "../styles/history";


export function History () {
    return (
        <AppSafeAreaView>
            <ScrollView>
            <View style={styles.top}>

            </View>
            <View style={styles.refresh}>
                <Text style={styles.refreshText}>Pull down to refresh</Text>
            </View>
            <View>
                <Text style={styles.date}>October</Text>
            </View>
            <View>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/8019/8019993.png'}} style={styles.arrow}/>
            </View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>sun Oct 16, 2022 18:18pm</Text>
                <Text style={styles.price}>NGN (6.98)</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MTN CHARGE FOR USSD SESSION</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>sun Oct 16, 2022 18:18pm</Text>
                <Text style={styles.price}>NGN (1000.00)</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MB/PATU/23434565676/2348122412133/Air</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>Sat Oct 15, 2022 18:18pm</Text>
                <Text style={styles.price}>NGN (1500.00)</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MB/PATU/Daniel Popoola/UTU/124356271/james Jummy</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>Tues Oct 13, 2022 18:18pm</Text>
                <Text style={styles.price}>NGN (6.98)</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MTN CHARGE FOR USSD SESSION</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>Tues Oct 13, 2022 18:18pm</Text>
                <Text style={styles.price}>NGN (500.00)</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MB/PATU/100964993/23470662997890/Air</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>Mon Oct 12, 2022 18:18pm</Text>
                <Text style={styles.price}>NGN (600.00)</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MB/PATU/dabif keksk/UTU/i3ii32/thomy toll</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>Mon Oct 12, 2022 18:18pm</Text>
                <Text style={styles.price1}>NGN 5000.00</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MB/PATU/Daniel Popoola/UTU/124356271/james Jummy</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.transDate}>
                <Text style={styles.transDateText}>Sat Oct 10, 2022 18:18pm</Text>
                <Text style={styles.price1}>NGN 10000.00</Text>
            </View>
            <View style={styles.trans}>
                <Text style={styles.transText}>MB/PATU/Daniel bolaji/UTU/9033522/toba makinde</Text>
                <Text style={styles.transText1}>Tap to display or download receipt</Text>
            </View>
            <View style={styles.line}></View>
            </ScrollView>
        </AppSafeAreaView>
    )
}