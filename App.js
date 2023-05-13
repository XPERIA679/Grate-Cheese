import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigation from './screens/Bottom Tab Navigator';
import { Provider } from 'react-redux';
import store from './screens/Redux/store';

export default function App() {
  return (
    <>
    <Provider store={store}>
    <BottomTabNavigation />
    <StatusBar style="auto"
     hidden={true} 
     />
     </Provider>
    </>
  );
}
