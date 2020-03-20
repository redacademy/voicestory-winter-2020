import React from 'react';
import {TouchableOpacity, View, Image, ScrollView} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import SpeakerCard from '../../components/SpeakerCard';
import styles from './styles';

const EventInfo = ({event}) => {
  const hero =
    event && event.thumbnail_url
      ? {uri: event.thumbnail_url}
      : {uri: 'https://placedog.net/500'};
  return (
    <View style={styles.eventcontainer}>
      <ScrollView>
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
          <View style={styles.infobox}>
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
          </View>
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
                    style={styles.speakercard}
                    name={speaker.owner.name}
                    source={{uri: speaker.profile_picture}}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity style={styles.buyticketbtn}>
          {/* not linked yet */}
          <Text style={styles.buytext}>Get Tickets</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EventInfo;
