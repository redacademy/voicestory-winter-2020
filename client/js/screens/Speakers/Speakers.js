import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import {SectionList} from 'react-native';
import styles from './styles';

const formatSessionData = users => {
  const formattedData = users
    .reduce((acc, curr) => {
      const nameExists = acc.find(
        section => section.title === curr.name.charAt(0).toUpperCase(),
      );
      nameExists
        ? nameExists.data.push(curr)
        : acc.push({title: curr.name.charAt(0).toUpperCase(), data: [curr]});
      return acc;
    }, [])
    .sort((a, b) => b.title - a.title);
  return formattedData;
};

const Speakers = ({users, navigation}) => {
  users = users.filter(user => user.isSpeaker != null);
  console.log('Speakers', users);
  return (
    users && (
      <View>
        <SectionList
          sections={formatSessionData(users)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Image
                source={{uri: 'https://placedog.net/500'}}
                style={{width: 100, height: 100}}
              />
              <Text>{item.name}</Text>
              <Text>{item.isSpeaker.title}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SpeakerProfile')}>
          <Text>Speaker</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default Speakers;
