import React, {useReducer, useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import Button from '../../components/Button/';
import styles from './styles';
import SpeakerCard from '../../components/SpeakerCard';
import {ScrollView} from 'react-native-gesture-handler';

const TicketInfo = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.ticket}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={require('../../assets/images/winstonatstage.jpg')}
          />
        </View>
        <Text style={styles.title}>Voice Story Live</Text>
        <Text style={styles.eventtitle}>Addicted to Pain</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            bgcolor="#D84F48"
            label="View Ticket"
            onPress={() => navigation.navigate('Ticket')}
          />
        </View>
        <View style={styles.ticketInfoContainer}>
          <View style={styles.infoSections}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/calender.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.date}>Tues, Mar 17, 2020</Text>
              <Text style={styles.time}>7:00 PM - 9:00 PM</Text>
            </View>
          </View>
          <View style={styles.infoSections}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/location.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.location}>PAL Studio Theatre</Text>
              <Text style={styles.address}>581 Cardero St. Vancouver</Text>
            </View>
          </View>
          <View style={styles.infoSections}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/pricing.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.price}>$20.00</Text>
              <Text style={styles.tax}>Not including taxes</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.about}>
            The VoiceStory Foundation tackles the issue of social isolation that
            is prevalent in society today, which is caused by a number of issues
            including: working remotely, addiction to mobile devices, the
            obsession with social media, reduced face to face interaction and
            the lack of spaces which promote deeper conversations and
            connection. The effects of social isolation can lead to feelings of
            depression, loneliness, fear of others, negative self-esteem or
            suicide. We are addressing the issue of social isolation by creating
            social connection, facilitating personal healing and promoting
            community building. This is done through our monthly speaking
            platform VoiceStory Live and our facilitated social events, where we
            invite participants to put away their devices, disconnect from the
            hustle and connect with others at a human level.
          </Text>
          <View style={styles.speakerContainer}>
            <Text style={styles.speakerTitle}>Speakers</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <SpeakerCard
                style={styles.speakerCard}
                name="Alexandria Papodopoulos"
                source={require('../../assets/images/winstonatstage.jpg')}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TicketInfo;
