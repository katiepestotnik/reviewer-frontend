import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//styled components
import {Container} from './styles/appStyles'

//components
import Home from './components/Home'
export default function App() {
  return (
    <Container>
      <StatusBar style="light" />
      <Home/>
    </Container>
  );
}


