import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppBar = ({ back, navigation }) => {
  return (
    <Appbar.Header style={styles.header}>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <>
          <Appbar.Content title="Home" style={styles.contentContainer} />
          <Appbar.Action
            icon={() => <Icon name="arrow-right" size={24} color="white" />}
            onPress={() => navigation.navigate('SecondScreen')}
            style={styles.action}
          />
        </>
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee', // Primary color
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    padding: 0, // Remove default padding
  },
});

export default AppBar;