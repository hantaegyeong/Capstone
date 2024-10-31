import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from './RecipeListScreen';
import DetailScreen from './DetailScreen';
import ReviewDetailScreen from './ReviewDetailScreen';

export type RootStackParamList = {
  RecipeList: undefined;
  Detail: undefined;
  ReviewDetail: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeList">
        <Stack.Screen name="RecipeList" component={RecipeListScreen} options={{ title: '홈화면' }}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: '상세 화면' }} />
        <Stack.Screen name="ReviewDetail" component={ReviewDetailScreen} options={{ title: '후기' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
