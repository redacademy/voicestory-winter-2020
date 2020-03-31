import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  LayoutAnimation,
} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import moment from 'moment';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Checkout = ({event, navigation}) => {
  const [unit, setUnit] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const updateUnit = unit => {
    setUnit(unit);
  };
  const toggleHandle = () => {
    setIsOpen(!isOpen);
    LayoutAnimation.easeInEaseOut();
  };
  return (
    <ScrollView>
      <View style={styles.checkoutContainer}>
        <View style={styles.ticketInfoContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={{uri: event.thumbnail_url}}
            />
          </View>

          <View style={styles.border}>
            <Text style={styles.title}>{event.title}</Text>
          </View>

          <Text style={[styles.bold, styles.label]}>Select Your Ticket(s)</Text>
          <View style={styles.ticketinfo}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/calender.png')}
              />
              <Text style={styles.day}>{moment(event.date).format('DD')}</Text>
            </View>

            <View style={styles.info}>
              <Text style={[styles.date, styles.bold]}>
                {moment(event.date).format('ddd, MMM DD YYYY')}
              </Text>
              <Text style={[styles.time, styles.light]}>{event.time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.price}>
            <View style={styles.ticketSelect}>
              <Text style={styles.bold}>{unit}x Early Bird Ticket</Text>
              <View style={styles.dropdownContainer}>
                {!isOpen ? (
                  <TouchableOpacity onPress={() => toggleHandle()}>
                    <View style={styles.selectedValueContainer}>
                      <Text style={styles.selectedValue}>{unit}</Text>
                      <Icon
                        style={{marginTop: 5}}
                        name="menu-down"
                        size={20}
                        color="white"
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.dropdown}>
                    <TouchableOpacity
                      onPress={() => {
                        updateUnit(1);
                        toggleHandle();
                      }}>
                      <Text style={styles.unit}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        updateUnit(2);
                        toggleHandle();
                      }}>
                      <Text style={styles.unit}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        updateUnit(3);
                        toggleHandle();
                      }}>
                      <Text style={styles.unit}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        updateUnit(4);
                        toggleHandle();
                      }}>
                      <Text style={styles.unit}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        updateUnit(5);
                        toggleHandle();
                      }}>
                      <Text style={styles.unit}>5</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <Text style={styles.text}>${event.price}</Text>
            </View>
            <View>
              <Text style={[styles.bold, styles.payment]}>Payment</Text>
              <View style={styles.paymentForm}>
                <View style={styles.formPadding}>
                  <Text style={styles.checkoutlabel}>Checkout</Text>
                  <View style={styles.typeContainer}>
                    <Text style={styles.paymenttype}>Credit Card</Text>
                    <Text style={styles.paymenttype}>PayPal</Text>
                  </View>
                  <TextInput
                    style={styles.inputPadding}
                    placeholder="Name On Card"
                    placeholderTextColor="#FBF7EF"
                  />
                  <TextInput
                    style={styles.inputPadding}
                    placeholder="Card Number"
                    placeholderTextColor="#FBF7EF"
                  />
                  <View style={styles.halfInput}>
                    <TextInput
                      style={styles.leftInputPadding}
                      placeholder="MM/YY"
                      placeholderTextColor="#FBF7EF"
                    />
                    <TextInput
                      style={styles.rightInputPadding}
                      placeholder="CVC"
                      placeholderTextColor="#FBF7EF"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.subtotal}>
              <Text style={styles.light}>Subtotal</Text>
              <Text style={styles.light}>${unit * event.price}</Text>
            </View>
            <View style={styles.servicecharge}>
              <Text style={styles.light}>Service Charge</Text>
              <Text style={styles.light}>$0</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.bold}>Total</Text>
              <Text style={styles.bold}>${unit * event.price}</Text>
            </View>

            <Button
              style={styles.button}
              bgcolor="#D84F48"
              label="Place Order"
              onPress={() =>
                navigation.navigate('Confirmation', {event, event})
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;
