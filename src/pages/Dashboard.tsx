

import {
  Dimensions,
  FlatList,
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
import { useEffect, useState } from 'react';
function DashBoard() {
  const [data, setData] = useState([])
  useEffect(() => {

    // axios.get('http://10.57.46.33:3001/api/tarefas').then(response => response.data).then(data => console.log(data.dados))
    ConsomeApi.listarTarefas().then(datas => setData(datas.dados))

    console.log(data)
  }, [])
  return (
    <NativeBaseProvider>
      <Box backgroundColor={'darkBlue.900'} pt={'2'} alignItems="center" h={height}>
        <FlatList
          data={data}
         
          renderItem={({ item }:any) => (
            <Task
              data={item.data}
              descricao={item.descricao}
              hora={item.hora}
              id={item.id}
            />
          )}
          
        />
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
