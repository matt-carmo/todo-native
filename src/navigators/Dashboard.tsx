

import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
  
  
  } from 'react-native';
  
  
  import { NativeBaseProvider, Box, Text, Checkbox, Flex } from "native-base"
  import { TouchableOpacity } from "react-native";
  const { height } = Dimensions.get('window');
  
  const { width } = Dimensions.get('window');

  import axios from 'axios';

import { Task } from '../Components/Task';
import ConsomeApi from '../Services/crud';
  function DashBoard(): JSX.Element {
    ConsomeApi.listarTarefas().then(data => console.log(data)).catch(error => console.log(error))
    return (
      <NativeBaseProvider >
  
        <Box backgroundColor={'darkBlue.900'} pt={'2'} alignItems="center" h={height}>
          <Task />
  
        </Box>
  
  
      </NativeBaseProvider>
    )
  }
  
  
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default DashBoard;
  