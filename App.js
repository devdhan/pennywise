import { SafeAreaView ,Platform, StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './framework/navigation/Stack';
import { AppProvider } from './globals/AppContext';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AppProvider>  
  );
}

const styles = StyleSheet.create({
  areaView:{
    marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : null
  }
});
