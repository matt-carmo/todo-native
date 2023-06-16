import { NativeBaseProvider, Box, Input, Button } from 'native-base';
import { useState } from 'react';
import { loginRequest } from '../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Lógica de autenticação aqui
    dispatch(loginRequest(email, password));



  };

  return (
    <NativeBaseProvider>
      <Box backgroundColor={'darkBlue.900'} pt={'2'} alignItems="center" h="100%">
        <Input
          placeholder="Email"
          placeholderTextColor={'#fff'}
          value={email}
          onChangeText={(text) => setEmail(text)}
          mb={2}
          color={'#fff'}
        />
        <Input
          placeholder="Password"
          placeholderTextColor={'#fff'}
          color={'#fff'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mb={2}
        />
        <Button onPress={handleLogin}>Login</Button>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;
