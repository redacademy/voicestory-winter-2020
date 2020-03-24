import React from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import Button from '../../components/Button';
const Application = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.mainDescription}>
            <Text style={styles.mainTitle}>
              VoiceStory live stage was created for you!
            </Text>
            <Text style={styles.text}>
              Our vision is to give everyone the opportunity to share part of
              their story, a moment in their life that can impact someone who is
              stuck in the "Sea of Suck", that emotion space where one feels
              that no one understands, no one cares and that they are all alone.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Everyone of us has stories stored within us, but their impact and
              potential to heal can not be unleashed until they are shared. If
              this makes you feel like you want to take the stage and share a
              story of your own, then we encourage you to apply to the theme
              that speaks to you the most.
            </Text>
            <Button
              style={styles.button}
              bgcolor="#2F9E99"
              label="Upcoming Themes"
            />
            <Button
              style={styles.button}
              bgcolor="#507EA2"
              label="Speaker FAQ"
              onPress={() => navigation.navigate('FAQ')}
            />
            <View>
              <Text style={styles.title}>Speaker Application</Text>
              <Text style={styles.speakerText}>
                Fields Marked with an * are required. Please Choose the theme(s)
                that resonates with you the most. Complete the speaker
                application below and click "submit".
              </Text>
              <Text style={styles.speakerText}>
                We process applications in the order they are received and will
                update this page ASAP once a theme is full
              </Text>
              <Text style={styles.emailMessage}>
                If you have any issues with the form, email us at:
              </Text>
              <Text style={styles.email}>info@voicestory.ca</Text>
              <Button
                style={styles.button}
                bgcolor="#DB4F48"
                label="Submit Application"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Application;
