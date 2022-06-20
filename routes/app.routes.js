import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home/Home';
import { SearchPage } from '../components/search/searchPage';
import { GenrePage } from '../components/genres/genrePage';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#A370F7',
      }}
    >
      <Screen
        name ="Home Page"
        component={Home}
      />
      <Screen
        name ="Pesquisa"
        component={SearchPage}
      />
      <Screen
        name ="Generos"
        component={GenrePage}
      />
    </Navigator>
  )
}