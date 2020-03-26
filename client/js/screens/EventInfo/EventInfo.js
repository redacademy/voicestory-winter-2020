import React, {useContext, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Modal,
  ImageBackground,
} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import SpeakerCard from '../../components/SpeakerCard';
import styles from './styles';
import {mapKey} from '../../apiKeys';
import openMap from 'react-native-open-maps';
import {UserContext} from '../../context/UserContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

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
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ImageBackground style={styles.dimmed}>
            <View style={styles.modalbox}>
              <TouchableOpacity
                style={styles.iconbtn}
                onPress={() => setModalVisible(!modalVisible)}>
                <Icon
                  name="close"
                  size={22}
                  color="#DB4F48"
                  style={[styles.shadow, styles.icon]}
                />
              </TouchableOpacity>
              <Text style={styles.modaltext}>
                To purchase tickets, please login or signup
              </Text>
              <TouchableOpacity
                style={[styles.continuebtn, styles.shadow]}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.buytext}>Continue</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
              <Text style={styles.boldtext}>
                {moment(event.date).format('dddd, MMMM Do YYYY')}
              </Text>
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
            <View style={[styles.iconbox, styles.shadow]}>
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
                    style={[styles.speakercard, styles.shadow]}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.buyticketbtn, styles.shadow]}
          onPress={() => {
            if (!user) {
              setModalVisible(true);
            } else {
              navigation.navigate('Ticket Info');
            }
          }}>
          <Text style={styles.buytext}>Get Tickets</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EventInfo;
