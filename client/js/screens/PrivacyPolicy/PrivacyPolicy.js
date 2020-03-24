import React from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';

const PrivacyPolicy = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.heading}>Data Is Not Shared</Text>
            <Text style={styles.text}>
              Vancouver TheatreSports does not give any information you provide
              to any other organization.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Usage of Data</Text>
            <Text style={styles.text}>
              A number of options are provided to you to help decide how you
              wish us to contact you for most purposes. We will endeavour to
              respect your wishes based on how you tell us we should contact
              you.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Safeguarding</Text>
            <Text style={styles.text}>
              Credit card data in our database conforms to the Payment Card
              Industry Security Standards Council (PCI SSC) Payment Application
              Data Security Standard (PA-DSS) v3.1 requirements from the credit
              card industry. That means we do not store data from credit card
              transactions such as Track II or CVV2/CID (the 3 or 4 digits on
              the back of the card). If stored, credit card numbers are securely
              encrypted and we ask that you never send a complete number to us
              in an email. PCI compliance means that our database and key
              internal applications have been tested for security by independent
              3rd party auditors and approved by the PCI council.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Retention</Text>
            <Text style={styles.text}>
              Data no longer required for our business purposes or legal
              requirements is destroyed.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;
