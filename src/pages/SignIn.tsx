import { NativeBaseProvider, Box, Input, Button } from 'native-base';
import { useEffect, useState } from 'react';
import ConsomeApi from '../Services/crud';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navitation = useNavigation()
  const handleRegister = () => {
    // Lógica de registro aqui

    const usuario = {
      nome: name, email: email, senha: password
    }
     ConsomeApi.criarUsuario(usuario).then(message => navitation.navigate('DashBoard')).catch(error => console.log(error))
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
      </Box>
    </NativeBaseProvider>
  );
}

export default SignIn;
