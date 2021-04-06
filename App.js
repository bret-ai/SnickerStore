import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import { Home } from './screens';

// constants
import { icons, images, COLORS, SIZES, FONTS } from './constants';
import { DefaultTheme } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, border: 'transparent' },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: { ...FONTS.navTitle },
            headerStyle: {
              elevation: 0,
            },
            headerTitleAlign: 'center',
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={console.log('Header right on pressed')}
              >
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
