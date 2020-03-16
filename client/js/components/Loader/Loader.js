import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        style={styles.indicator}
        animating={true}
        size="large"
        color="black"
      />
    </SafeAreaView>
  );
};

export default Loader;
