import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from './src/pages/Dashboard';
import { MainStack } from './src/navigators/MainStack';
const Stack = createNativeStackNavigator();
import { Text } from 'react-native';
function App() {
  return (
    <NavigationContainer>
  
      <MainStack/>
     
    </NavigationContainer>
   

  );
}

export default App;