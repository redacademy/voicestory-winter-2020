import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';

const EventInfo = ({navigation}) => {
  return (
    <View>
      <Image
        style={styles.headerimg}
        source={{uri: 'https://placedog.net/520'}}
      />
      <View style={styles.details}>
        <View style={styles.box}>
          <Text>ICON</Text>
          <View style={styles.textbox}>
            <Text>Day Mon Day# Year</Text>
            <Text>Time - Time</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text>ICON</Text>
          <View style={styles.textbox}>
            <Text>Location Name</Text>
            <Text>Address</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text>ICON</Text>
          <View style={styles.textbox}>
            <Text>Price</Text>
            <Text>Price does not include taxes.</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.bigtext}>About</Text>
        <Text style={}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          condimentum risus. Vivamus consectetur neque a mauris rutrum, in
          semper mi facilisis. Aliquam tempor at turpis eu consectetur. Praesent
          auctor neque at purus auctor congue.
        </Text>
        <Text style={styles.bigtext}>Speakers</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SpeakerProfile')}>
          <Text>SpeakerCard</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* not linked yet */}
          <Text>Get Tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventInfo;
