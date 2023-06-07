import { Box, Text, Flex, Checkbox } from "native-base"
import { Dimensions, TouchableOpacity } from "react-native"

const { width } = Dimensions.get('window');
export const Task = () => {

    
    return (
        <TouchableOpacity>
          <Box w={width - 10} rounded="xl" borderColor={'darkBlue.500'} borderWidth={'1'} backgroundColor='darkBlue.900'>
            <Box px={'5'}>

              <Text color={'coolGray.100'} fontWeight={'700'} fontSize={'20'} textAlign={'center'}>Hello world</Text>
              <Text color={'coolGray.100'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur vero veniam velit reprehenderit recusandae nulla officia voluptate repudiandae, minima laboriosam dolor. Quis obcaecati eum reprehenderit maiores dolores, impedit ratione.</Text>
            </Box>


            <Flex px={'5'} direction="row" pt={'1'} borderTopColor={'darkBlue.500'} borderWidth='1' justifyContent={'space-between'}>




              <Checkbox color={'coolGray.100'} value="test" accessibilityLabel="This is a dummy checkbox" />
              <Text color={'coolGray.100'}>
                10/09/2020 10:10:31
              </Text>

            </Flex>

          </Box>
        </TouchableOpacity>
    )
}