import { StyleSheet, View } from 'react-native';
import React from 'react';

import { SCREEN_WIDTH } from '../utils/dimensions';

const size = SCREEN_WIDTH / 4 - 10;

const Story = ({ color }) => {
 return (
  <View style={styles.storyContainer}>
   <View style={[styles.userPhoto, { borderColor: color }]}></View>
   <View style={[styles.userPhoto, { borderColor: color }]}></View>
   <View style={[styles.userPhoto, { borderColor: color }]}></View>
   <View style={[styles.userPhoto, { borderColor: color }]}></View>
  </View>
 );
};

export default Story;

const styles = StyleSheet.create({
 storyContainer: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginBottom: 10,
 },
 userPhoto: {
  width: size,
  height: size,
  borderRadius: size,
  borderWidth: 3,
  marginRight: 0,
 },
});
