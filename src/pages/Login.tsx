import { NativeBaseProvider, Box, Input, Button } from 'native-base';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <NativeBaseProvider>
      <Box backgroundColor={'darkBlue.900'} pt={'2'} alignItems="center" h="100%">
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
        <Button onPress={handleLogin}>Login</Button>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;
