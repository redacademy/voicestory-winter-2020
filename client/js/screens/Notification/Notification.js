import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationsList from '../../components/NotificationsList';

const Notification = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            style={styles.close}
            name="arrow-left"
            size={25}
            color="#FBF7EF"
          />
        </TouchableOpacity>
        <View style={styles.notification}>
          <Text style={styles.header}>Notifications</Text>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.border}>
          <Text style={styles.heading}>New</Text>
        </View>
        <NotificationsList />
        <View style={styles.border}>
          <Text style={styles.heading}>This Week</Text>
        </View>
        <NotificationsList />

        <View style={styles.border}>
          <Text style={styles.heading}>This Month</Text>
        </View>
        <NotificationsList />
      </ScrollView>
    </>
  );
};

export default Notification;
