import React from 'react';
import {TouchableOpacity, View, Image, ScrollView} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import SpeakerCard from '../../components/SpeakerCard';
import styles from './styles';

const EventInfo = ({navigation}) => {
  return (
    <View style={styles.eventcontainer}>
      <ScrollView>
        <Image
          style={styles.headerimg}
          source={{uri: 'https://placedog.net/520'}}
        />
        <View style={styles.details}>
          <View style={styles.infobox}>
            <View style={styles.iconbox}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/calender1x.png')}
              />
            </View>
            <View style={styles.textbox}>
              <Text style={styles.boldtext}>Day Mon Day# Year</Text>
              <Text style={styles.lighttext}>Time - Time</Text>
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
              <Text style={styles.boldtext}>Location Name</Text>
              <Text style={styles.lighttext}>Address</Text>
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
              <Text style={styles.boldtext}>Price</Text>
              <Text style={styles.lighttext}>
                Price does not include taxes.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutcontainer}>
          <View style={styles.about}>
            <Text style={styles.bigtext}>About</Text>
            <Text style={styles.abouttext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              condimentum risus. Vivamus consectetur neque a mauris rutrum, in
              semper mi facilisis. Aliquam tempor at turpis eu consectetur.
              Praesent auctor neque at purus auctor congue.
            </Text>
            <Text style={styles.bigtext}>Speakers</Text>
          </View>
          <View style={styles.speakercontainer}>
            <ScrollView
              style={styles.scroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <SpeakerCard
                style={styles.speakercard}
                name="Ivan Dai"
                source={require('../../assets/images/winstonatstage.jpg')}
              />
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
