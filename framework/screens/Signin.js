import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { AppSafeAreaView } from "../componenets/AppSafeAreaView";
import { Formik } from "formik";
import * as yup from 'yup';
import { Button, TextInput } from "react-native-paper";
import { styles } from "../styles/signin";
import { Theme } from "../componenets/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "../navigation/Stack";


const formRules = yup.object({
  email:yup.string().email().required(),
  password:yup.string().min(8).required()
})

export function Signin ({ navigation }) {
    return(
      <AppSafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.loginIntro}>LOGIN TO YOUR ACCOUNT</Text>
          </View>


          <Formik 
          initialValues={{
            email:'',
            password:''
          }}

          onSubmit={(values,actions) => {
            console.log(values);
            actions.resetForm();
        }}
          >
        {
          (props) => (
            <View>
               <TextInput style={styles.input} 
                  placeholder='Email address' 
                  keyboardType='email-address' 
                  onChangeText={props.handleChange('email')} mode='outlined' 
                  outlineColor={Theme.colors.ui.brandPurple} />

                <TextInput style={styles.input} 
                  placeholder='Create password' 
                  secureTextEntry={true} 
                  onChangeText={props.handleChange('password')} 
                  mode='outlined' 
                  outlineColor={Theme.colors.ui.brandPurple} />

                <Button
                  mode='contained' 
                  icon='arrow-right' 
                  color={Theme.colors.ui.brandPurple}
                  contentStyle={{paddingVertical:8}}
                  onPress={() => props.handleSubmit()}
                  >
                    LOGIN
                    </Button>
            </View>            
          )
        }


          </Formik>
              <TouchableOpacity 
              onPress={() => navigation.navigate('History')}
              style={styles.history}>
                <Text style={styles.historyText}>Transaction History</Text>
              </TouchableOpacity>
        </ScrollView>
      </AppSafeAreaView>
    )
}
