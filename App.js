import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <Text>This is App Js.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
