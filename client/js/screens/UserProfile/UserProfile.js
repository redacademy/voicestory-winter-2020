import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserProfile = ({navigation, users}) => {
  return (
    <View style={styles.main}>
      <View style={styles.user}>
        <Text style={styles.name}>Winston VoiceStory</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.email}>emailplaceholder@gmail.com</Text>
          <TouchableOpacity>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          bgcolor="#2F9E99"
          label="Apply to be a Speaker"
          icon={<Icon name="square-edit-outline" size={25} color="#FBF7EF" />}
          onPress={() => navigation.navigate('Application')}
        />
        <Button
          style={styles.button}
          bgcolor="#D84F48"
          label="Favorite Videos"
          icon={<Icon name="heart-outline" size={25} color="#FBF7EF" />}
          onPress={() => navigation.navigate('Faves')}
        />
        <Button
          style={styles.button}
          bgcolor="#507EA2"
          label="Downloaded Videos"
          icon={<Icon name="download" size={25} color="#FBF7EF" />}
        />
      </View>
    </View>
  );
};

export default UserProfile;
