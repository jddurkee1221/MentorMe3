import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MentorProfile from './screens/MentorProfile';
import SearchBar from './screens/SearchBar';
import ContactUs from './screens/ContactUs';
import HomeScreenMentee from './screens/HomeScreenMentee';
import MentorSearch from './screens/MentorSearch';
// import AvailableMentors from './screens/AvailableMentors';



const RootStack = StackNavigator({
  Home: {
    screen: HomeScreenMentee,
  },
  Profile: {
    screen: MentorProfile,
  },
  Topics: {
    screen: SearchBar
  },
  Contact: {
    screen: ContactUs
  },
  Search: {
    screen: MentorSearch
  },
  // AvailableMentors: {
  //   screen: AvailableMentors
  // },
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}