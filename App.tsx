import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeListScreen from './RecipeListScreen';
import DetailScreen from './DetailScreen';
import ReviewDetailScreen from './ReviewDetailScreen';
import ProfileScreen from './ProfileScreen'; 
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  RecipeList: undefined;
  Detail: undefined;
  ReviewDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="RecipeList">
      <Stack.Screen name="RecipeList" component={RecipeListScreen} options={{ title: '홈화면' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: '상세 화면' }} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetailScreen} options={{ title: '후기' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Upload') {
              iconName = 'cloud-upload-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ title: '홈' }} />
        <Tab.Screen name="Upload" component={ReviewDetailScreen} options={{ title: '업로드' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
