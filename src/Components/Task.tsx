import { Box, Text, Flex, Checkbox } from "native-base"
import { Dimensions, TouchableOpacity } from "react-native"

const { width } = Dimensions.get('window');

interface iTask {
  data:string,
  descricao:string,
  hora:string | null,
  id:number,
  // status:boolean

}
export const Task = (task:iTask) => {

    
    return (
        <TouchableOpacity key={task.id}>
          <Box w={width - 10} rounded="xl" borderColor={'darkBlue.500'} borderWidth={'1'} backgroundColor='darkBlue.900'>
            <Box px={'5'}>

              {/* <Text color={'coolGray.100'} fontWeight={'700'} fontSize={'20'} textAlign={'center'}>Hello world</Text> */}
              <Text color={'coolGray.100'}>{task.descricao}</Text>
            </Box>


            <Flex px={'5'} direction="row" pt={'1'} borderTopColor={'darkBlue.500'} borderWidth='1' justifyContent={'space-between'}>




              {/* <Checkbox color={'coolGray.100'} value="test" accessibilityLabel="This is a dummy checkbox" /> */}
              <Text color={'coolGray.100'}>
                {task.data} {task.hora}
              </Text>

            </Flex>

          </Box>
        </TouchableOpacity>
    )
}