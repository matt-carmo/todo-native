import { NativeBaseProvider, Box, Input, Button, Text, Flex } from 'native-base';
import { useEffect, useState } from 'react';
import ConsomeApi from '../Services/crud';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../store/modules/auth/actions';
function SignIn() {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navitation = useNavigation()
  const handleRegister = () => {
    // Lógica de registro aqui

    const usuario = {
      nome: name, email: email, senha: password
    }

  
      // Lógica de autenticação aqui
      dispatch(loginRequest(usuario))
  
  

    // ConsomeApi.criarUsuario(usuario).then(message => {
    //   navitation.navigate('DashBoard');

    // }).catch(error => console.log(error))
    //  navigation.push('DashBoard')
  };

  return (
    <NativeBaseProvider>
      <Box backgroundColor={'darkBlue.900'} pt={'2'} alignItems="center" h="100%">
        <Input
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mb={2}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mb={2}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mb={2}
        />

        <Button onPress={handleRegister}>Register</Button>
        <Flex direction="row" gap="1">
          <Text color={"primary.50"}>
            Já tem uma conta?
          </Text>
          <TouchableOpacity onPress={() => navitation.navigate('Login')}>
            <Text color={"primary.400"}>Entrar</Text>
          </TouchableOpacity>
        </Flex>
      </Box>
    </NativeBaseProvider>
  );
}

export default SignIn;
