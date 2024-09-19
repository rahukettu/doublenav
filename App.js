import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const HomeScreen = React.lazy(() => import('./screens/HomeScreen'));
const SecondScreen = React.lazy(() => import('./screens/SecondScreen'));
import AppBar from './components/AppBar';
import { Provider as PaperProvider } from 'react-native-paper';
import { screensEnabled } from 'react-native-screens';


const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route, navigation }) => ({
            header: () => {
              const title = route.name === 'Home' ? 'Home' : 'Details';  // Conditional titles
              return <AppBar back={navigation.canGoBack()} navigation={navigation} title={title} />;  // Pass title as prop
            },
          })}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home Screen' }}
          />
          <Stack.Screen
            name="Details"
            component={SecondScreen}
            options={{ title: 'Details Screen' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;