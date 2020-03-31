import React from 'react';
import Text from '../../components/CustomText/CustomText';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const UserProfile = ({navigation, user}) => {
  return (
    <View style={styles.main}>
      <View style={styles.user}>
        <Text style={styles.name}>{user[0].name}</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.email}>{user[0].email}</Text>
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
          icon={<Icon name="download-outline" size={25} color="#FBF7EF" />}
        />
      </View>
    </View>
  );
};
UserProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  user: PropTypes.object,
};

export default UserProfile;
