
import { View,Text, StyleSheet, Button } from 'react-native';
// Keep the splash screen visible while we fetch resources

export function Home() {

        return(
            <View style={styles.container}>
                <Text style={styles.brandName}>PennyWise</Text>
            </View>
            
        )
    }

    const styles = StyleSheet.create({
        container:{

        },
        brandName:{
            
        },
    });