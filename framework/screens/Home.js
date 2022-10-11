import React, { useCallback, useEffect, useState } from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {Manrope_200ExtraLight} from '@expo-google-fonts/manrope';
import {Monoton_400Regular} from '@expo-google-fonts/monoton';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export function Home() {
    const [appIsReady, setAppIsReady] = useState(false);

        useEffect(() => {
        async function prepare() {
            try {
            await Font.loadAsync({Monoton_400Regular});
            await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
            console.warn(e);
            } finally {
            setAppIsReady(true);
            }
        }
    
        prepare();
        }, []);
  
        const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
        }, [appIsReady]);
    
        if (!appIsReady) {
        return null;
        }
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