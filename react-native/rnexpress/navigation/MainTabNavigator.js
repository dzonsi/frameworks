import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SectionListHeterogenous from '../screens/SectionListHeterogenous';
import ComponentsState from '../screens/ComponentsState';
import ReduxState from '../screens/ReduxState';
import ReactRedux from '../screens/ReactRedux';
import Networking from '../screens/Networking';
import AnimatedExample from '../screens/AnimatedExample';
import RNAnimateble from '../screens/RNAnimatable';
import APIComponents from '../screens/APIComponents';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Flexbox',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'ScrollView',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Flat and Section List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

// Section List Heterogenous

const SectionListHeterogenousStack = createStackNavigator(
  {
    SectionListHeterogenous: SectionListHeterogenous,
  },
  config
);

SectionListHeterogenousStack.navigationOptions = {
  tabBarLabel: 'Section List Heterogenous',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

SectionListHeterogenousStack.path = '';

// Components State

const ComponentsStateStack = createStackNavigator(
  {
    ComponentsState: ComponentsState,
  },
  config
);

ComponentsStateStack.navigationOptions = {
  tabBarLabel: 'ComponentsState',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

ComponentsStateStack.path = '';

// Redux State

const ReduxStateStack = createStackNavigator(
  {
    ReduxState: ReduxState,
  },
  config
);

ReduxStateStack.navigationOptions = {
  tabBarLabel: 'ReduxState',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

ReduxStateStack.path = '';

// ReactRedux

const ReactReduxStack = createStackNavigator(
  {
    ReactRedux: ReactRedux,
  },
  config
);

ReactReduxStack.navigationOptions = {
  tabBarLabel: 'ReactRedux',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

ReactReduxStack.path = '';

// Networking

const NetworkingStack = createStackNavigator(
  {
    Networking: Networking,
  },
  config
);

NetworkingStack.navigationOptions = {
  tabBarLabel: 'Networking',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

NetworkingStack.path = '';

// Animated

const AnimatedExampleStack = createStackNavigator(
  {
    AnimatedExample: AnimatedExample,
  },
  config
);

AnimatedExampleStack.navigationOptions = {
  tabBarLabel: 'AnimatedExample',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

AnimatedExampleStack.path = '';

// RNAnimateble

const RNAnimatebleStack = createStackNavigator(
  {
    RNAnimateble: RNAnimateble,
  },
  config
);

RNAnimatebleStack.navigationOptions = {
  tabBarLabel: 'AnimatedExample',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

RNAnimatebleStack.path = '';

// API Components

const APIComponentsStack = createStackNavigator(
  {
    APIComponents: APIComponents,
  },
  config
);

APIComponentsStack.navigationOptions = {
  tabBarLabel: 'API Components',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

APIComponentsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  SectionListHeterogenousStack,
  ComponentsStateStack,
  ReduxStateStack,
  ReactReduxStack,
  NetworkingStack,
  AnimatedExampleStack,
  RNAnimatebleStack,
  APIComponentsStack
});

tabNavigator.path = '';



export default tabNavigator;
