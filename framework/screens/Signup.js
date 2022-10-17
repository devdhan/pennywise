import React, { useCallback, useEffect, useState, useContext } from 'react';
import { AppContext } from '../../globals/AppContext';
import { AppSafeAreaView } from '../componenets/AppSafeAreaView';
import { View, Text, TouchableOpacity,ScrollView, Alert, ToastAndroid, Platform } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, TextInput } from 'react-native-paper';
import { styles } from '../styles/signup';
import { Theme } from '../componenets/Theme';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {Monoton_400Regular} from '@expo-google-fonts/monoton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const formRules = yup.object({
    firstname:yup.string().min(2).max(32).required(),
    lastname:yup.string().min(2).max(32).required(),
    phone:yup.string().min(11).max(15),
    email:yup.string().email().required(),
    passwordConfirmation:yup.string().min(8).required()
    .oneOf([yup.ref('password'), null],'Password must match')
})

export function Signup ({ navigation }) {
    const [appIsReady, setAppIsReady] = useState(false);
    const {userUID,userEmail,setUserEmail} = useContext(AppContext);
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

    return (
        <AppSafeAreaView>
            <ScrollView>
            {/* other components */}
                <View style={styles.header}>
                    <Text style={[styles.brandName, {fontFamily:'Monoton_400Regular'}]}>pennywise</Text>
                    <Text style={styles.headerIntroText}>Create an account to start saving</Text>
                </View>
                {Platform.OS === 'android' ? ToastAndroid.show(
                    'Welcome to Pennywise',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM) : null}

                <Formik
                initialValues={{
                    firstname:'',
                    lastname:'',
                    phone:'',
                    email:'',
                    password:'',
                    passwordConfirmation:''
                }}

                onSubmit={(values,actions) => {
                    console.log(values);
                    actions.resetForm();
                }}

                validationSchema = {formRules}
                >
                    {
                        (props) => (
                            <View style={styles.formArea}>
                                <TextInput style={styles.input} 
                                placeholder='First name' 
                                onChangeText={props.handleChange('firstname')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple} />
                                <Text style={styles.errorMessage}>
                                    {props.touched.firstname && props.errors.firstname}
                                </Text>

                                <TextInput style={styles.input} 
                                placeholder='Last name' 
                                onChangeText={props.handleChange('lastname')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple} />
                                <Text style={styles.errorMessage}>
                                    {props.touched.lastname && props.errors.lastname}
                                </Text>

                                <TextInput style={styles.input} 
                                placeholder='Phone number' 
                                keyboardType='phone-pad' 
                                onChangeText={props.handleChange('phone')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple} />
                                <Text style={styles.errorMessage}>
                                    {props.touched.phone && props.errors.phone}
                                </Text>

                                <TextInput style={styles.input} 
                                placeholder='Email address' 
                                keyboardType='email-address' 
                                onChangeText={props.handleChange('email')} mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple} />
                                <Text style={styles.errorMessage}>
                                    {props.touched.email && props.errors.email}
                                </Text>

                                <TextInput style={styles.input} 
                                placeholder='Create password' 
                                secureTextEntry={true} 
                                onChangeText={props.handleChange('password')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple} />
                                
                                <TextInput style={styles.input} 
                                placeholder='Confirm password' 
                                secureTextEntry={true} 
                                onChangeText={props.handleChange('passwordConfirmation')} 
                                mode='outlined' 
                                outlineColor={Theme.colors.ui.brandPurple} />
                                <Text style={styles.errorMessage}>
                                    {props.touched.passwordConfirmation && props.errors.passwordConfirmation}
                                </Text>
                                
                                <Button 
                                mode='contained' 
                                icon='arrow-right' 
                                color={Theme.colors.ui.brandPurple}
                                contentStyle={{paddingVertical:8}}
                                onPress={() => props.handleSubmit()}
                                >
                                    CREATE ACCOUNT
                                </Button>
                            </View>
                        )
                    }
                </Formik>

                <View style={styles.signAlt}>
                    <Text style={styles.altInfo}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin') }>
                        <Text style={styles.altActionText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity
                    onPress={() => Alert.alert(
                        'Notice',
                        'Read full notice on www.earlycode.net/privacy',
                        [{text:'Okay'}, {text:'Take me there', onPress: () => console.log('going there')}]
                    )}
                    style={{alignSelf:'center'}}
                    >
                        <Text style={{textAlign:'center', color:Theme.colors.ui.brandPurple}}>Read more.</Text>
                    </TouchableOpacity>
            </ScrollView>
        </AppSafeAreaView>
    )
}

