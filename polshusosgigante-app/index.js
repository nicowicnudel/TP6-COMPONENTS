import { registerRootComponent } from 'expo';
import App from './App';
import { View, Text } from 'react-native';

<View style={{ padding: 20, backgroundColor: 'lightgray' }}>
  <Text>Este es un contenedor</Text>
</View>


registerRootComponent(App);
