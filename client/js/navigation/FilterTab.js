import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewestScreen from '../screens/Newest';
import MostViewedScreen from '../screens/MostViewed';
import ThemesScreen from '../screens/Themes';
import React from 'react';

const FilterTab = createMaterialTopTabNavigator();

export default FilterTabNav = () => {
  return (
    <FilterTab.Navigator
      sceneContainerStyle={{backgroundColor: '#FBF7EF'}}
      tabBarOptions={{
        style: {
          backgroundColor: '#FBF7EF',
        },
        labelStyle: {
          fontFamily: 'Lato-Bold',
          textTransform: 'none',
          fontSize: 15,
        },
        indicatorStyle: {
          backgroundColor: '#DB4F48',
        },
      }}>
      <FilterTab.Screen name="Newest" component={NewestScreen} />
      <FilterTab.Screen name="Most Viewed" component={MostViewedScreen} />
      <FilterTab.Screen name="Themes" component={ThemesScreen} />
    </FilterTab.Navigator>
  );
};
