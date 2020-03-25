import React, {useContext, useState} from 'react';
import {TouchableOpacity, View, Image, ScrollView, Modal} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import SpeakerCard from '../../components/SpeakerCard';
import styles from './styles';
import {mapKey} from '../../apiKeys';
import openMap from 'react-native-open-maps';
import {UserContext} from '../../context/UserContext';

const EventInfo = ({event, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {user} = useContext(UserContext);

  const hero =
    event && event.thumbnail_url
      ? {uri: event.thumbnail_url}
      : {uri: 'https://placedog.net/500'};

  const getMap = async address => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${mapKey}`,
    )
      .then(resp => resp.json())
      .then(data => {
        openMap({
          latitude: data.results[0].geometry.location.lat,
          longitude: data.results[0].geometry.location.lng,
          query: data.results[0].formatted_address,
        });
      })
      .catch(e => {
        throw new Error(e);
      });
  };

  return (
    <View style={styles.eventcontainer}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <Text>Testing testing</Text>
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Image style={styles.headerimg} source={hero} />
        <View style={styles.details}>
          <View style={styles.infobox}>
            <View style={styles.iconbox}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/calender1x.png')}
              />
            </View>
            <View style={styles.textbox}>
              <Text style={styles.boldtext}>{event.date}</Text>
              <Text style={styles.lighttext}>{event.time}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              getMap(event.location_address);
            }}
            style={styles.infobox}>
            <View style={styles.iconbox}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/location1x.png')}
              />
            </View>
            <View style={styles.textbox}>
              <Text style={styles.boldtext}>{event.location_name}</Text>
              <Text style={styles.lighttext}>{event.location_address}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.infobox}>
            <View style={styles.iconbox}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/pricing1x.png')}
              />
            </View>
            <View style={styles.textbox}>
              <Text style={styles.boldtext}>${event.price}</Text>
              <Text style={styles.lighttext}>Does not include taxes</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutcontainer}>
          <View style={styles.about}>
            <Text style={styles.bigtext}>About</Text>
            <Text style={styles.abouttext}>{event.description}</Text>
            <Text style={styles.bigtext}>Speakers</Text>
          </View>
          <View style={styles.speakercontainer}>
            <ScrollView
              style={styles.scroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {event.speakers &&
                event.speakers.map(speaker => (
                  <SpeakerCard
                    key={speaker}
                    speaker={speaker}
                    navigation={navigation}
                    style={styles.speakercard}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buyticketbtn}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.buytext}>Get Tickets</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EventInfo;
