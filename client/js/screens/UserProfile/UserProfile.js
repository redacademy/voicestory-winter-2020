import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {TouchableOpacity, Button, View} from 'react-native';
import styles from './styles';

const UserProfile = ({navigation, users}) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.name}>Firstname Lastname Placeholder</Text>
        <View style={styles.email}>
          <Text>emailplaceholder@gmail.com</Text>
          <TouchableOpacity>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button
          title="Apply to be a Speaker"
          onPress={() => navigation.navigate('Application')}
          style={(styles.apply, styles.button)}
        />
        <Button
          title="Favorite Videos"
          onPress={() => navigation.navigate('Faves')}
          style={(styles.favourite, styles.button)}
        />
        <Button
          title="Downloaded Videos"
          style={(styles.download, styles.button)}
        />
      </View>
    </View>
  );
};

export default UserProfile;
