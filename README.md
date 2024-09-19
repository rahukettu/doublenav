# doublenav
React Native Navigation with Custom App Bar

This project demonstrates how to implement stack-based navigation using @react-navigation/native in a React Native app. The app also integrates react-native-paper for UI components and includes a custom App Bar with conditional rendering of navigation controls.
Features

    Stack-based navigation using @react-navigation/native.
    Two screens: HomeScreen and SecondScreen.
    Custom App Bar that:
        Displays a back button on SecondScreen.
        Displays an arrow-right icon on HomeScreen, which navigates to the SecondScreen.
    Utilizes react-native-paper for material design UI.
    Integrates react-native-vector-icons for custom icons.

Prerequisites

    Node.js (v16.x.x recommended)
    npm or yarn
    Expo CLI (installed locally)

Installation

    Clone the repository:

    bash

git clone https://github.com/rahukettu/navigation-app.git
cd navigation-app

Install project dependencies:

bash

npm install

Install required Expo SDK packages:

bash

npx expo install react-native-paper react-native-vector-icons react-native-safe-area-context

Install React Navigation libraries:

bash

npm install @react-navigation/native @react-navigation/stack

Install peer dependencies required by React Navigation:

bash

    npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

Running the App

To start the project, use the following command:

bash

npx expo start

This will open Expo DevTools in your browser, where you can run the app on an emulator or physical device.
Project Structure

bash

.
├── components/
│   └── AppBar.js        # Custom App Bar component
├── screens/
│   ├── HomeScreen.js    # Home screen component
│   └── SecondScreen.js  # Second screen component
├── App.js               # Root file for the app
├── package.json
└── README.md            # Project documentation

Key Components

    AppBar.js:
        A custom App Bar component built using react-native-paper.
        Displays a back button on SecondScreen if the user can navigate back.
        Displays an arrow-right icon on HomeScreen to navigate to SecondScreen.

    HomeScreen.js:
        The main screen of the app, displaying a button that navigates to SecondScreen.

    SecondScreen.js:
        A secondary screen with a back button in the App Bar to return to HomeScreen.

App.js

The root of the application uses a stack navigator from @react-navigation/stack to manage the screens. It also passes the custom App Bar component via the screenOptions prop.

js

<Stack.Navigator
  screenOptions={({ navigation }) => ({
    header: () => <AppBar back={navigation.canGoBack()} navigation={navigation} />,
  })}
>
  <Stack.Screen name="HomeScreen" component={HomeScreen} />
  <Stack.Screen name="SecondScreen" component={SecondScreen} />
</Stack.Navigator>

Custom App Bar

The custom App Bar component uses react-native-paper's Appbar and conditionally renders the back button or arrow icon based on the navigation state.

js

const AppBar = ({ back, navigation }) => {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <>
          <Appbar.Content title="Home" />
          <Appbar.Action
            icon={() => <Icon name="arrow-right" size={24} color="white" />}
            onPress={() => navigation.navigate('SecondScreen')}
          />
        </>
      )}
    </Appbar.Header>
  );
};

Screens
HomeScreen.js

js

import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Second Screen" onPress={() => navigation.navigate('SecondScreen')} />
  </View>
);

export default HomeScreen;

SecondScreen.js

js

import React from 'react';
import { View, Text } from 'react-native';

const SecondScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Second Screen</Text>
  </View>
);

export default SecondScreen;

Conclusion

This project demonstrates a simple way to implement navigation using @react-navigation/native in combination with react-native-paper and custom components. It includes conditional rendering logic for navigation buttons in the custom App Bar.
License

This project is licensed under the MIT License.
