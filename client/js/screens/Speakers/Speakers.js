import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import {SectionList} from 'react-native';

const formatSessionData = users => {
  return users
    .reduce((acc, curr) => {
      const nameExists = acc.find(section => section.title === curr.name);
      nameExists
        ? nameExists.data.push(curr)
        : acc.push({title: curr.name, data: [curr]});
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

const Speakers = ({users, navigation}) => {
  users = users.filter(user => user.isSpeaker != null);
  console.log('Speakers', users);
  return (
    users && (
      <>
        <SectionList
          sections={formatSessionData(users)}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Text>{item.title}</Text>}
          renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SpeakerProfile')}>
          <Text>Speaker</Text>
        </TouchableOpacity>
      </>
    )
  );
};

export default Speakers;
