/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const TempSearch = (props) => (<Button onPress={() => { props.navigation.navigate('Detail'); }} title="next" />);
const TempDetail = (props) => (<Button onPress={() => { props.navigation.pop(); }} title="close" />);

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const SearchTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={TempSearch, VideoList}
        options={{
          title: 'Youtube Search',
          headerStyle: {
            backgroundColor: '#FF0000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Detail" component={TempDetail} />
    </Stack.Navigator>
  );
};

export default SearchTab;
