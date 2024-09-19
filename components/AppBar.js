import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppBar = ({ back, navigation, title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Appbar.Header style={styles.header}>
        {back ? (
          <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
        ) : null}
        <Appbar.Content title={title} titleStyle={styles.title} />
        {!back && (
          <Appbar.Action
            icon="arrow-right"
            onPress={() => navigation.navigate('Details')}
            color="white"
            style={styles.action}
          />
        )}
      </Appbar.Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: '#800080',
    height: 74,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    padding: 0,
  },
});

export default AppBar;