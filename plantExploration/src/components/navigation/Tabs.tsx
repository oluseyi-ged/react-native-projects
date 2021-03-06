import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons, COLORS} from '../../constants';
import {Home} from 'screens';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {height: '10%'},
};

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
      }}>
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={{
          width: 23,
          height: 23,
        }}
      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flashIcon}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Box':
              return (
                <Image
                  source={icons.cubeIcon}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Camera':
              return <CameraButton />;
            case 'Search':
              return (
                <Image
                  source={icons.searchIcon}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Favourite':
              return (
                <Image
                  source={icons.heartIcon}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Box" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Camera"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourite"
        component={Home}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
