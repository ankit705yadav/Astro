import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class HscrollCardBig extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Leo.png')}
            />
            <Text style={styles.cardTitle}>
              Mars in Vishaka - 1 November to 20 November
            </Text>
            <Text style={styles.cardInfo}>
              Lift your energy to a new level. Mars, planet of action and
              competition, is in Vishakha nakshatra across the signs of Libra
              and Scorpio from November 1st to 20th 2023.
            </Text>
            <Text style={styles.cardLink}>
              What does this transit scientifically mean for you?
            </Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Leo.png')}
            />
            <Text style={styles.cardTitle}>
              Mars in Vishaka - 1 November to 20 November
            </Text>
            <Text style={styles.cardInfo}>
              Lift your energy to a new level. Mars, planet of action and
              competition, is in Vishakha nakshatra across the signs of Libra
              and Scorpio from November 1st to 20th 2023.
            </Text>
            <Text style={styles.cardLink}>
              What does this transit scientifically mean for you?
            </Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Leo.png')}
            />
            <Text style={styles.cardTitle}>
              Mars in Vishaka - 1 November to 20 November
            </Text>
            <Text style={styles.cardInfo}>
              Lift your energy to a new level. Mars, planet of action and
              competition, is in Vishakha nakshatra across the signs of Libra
              and Scorpio from November 1st to 20th 2023.
            </Text>
            <Text style={styles.cardLink}>
              What does this transit scientifically mean for you?
            </Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Leo.png')}
            />
            <Text style={styles.cardTitle}>
              Mars in Vishaka - 1 November to 20 November
            </Text>
            <Text style={styles.cardInfo}>
              Lift your energy to a new level. Mars, planet of action and
              competition, is in Vishakha nakshatra across the signs of Libra
              and Scorpio from November 1st to 20th 2023.
            </Text>
            <Text style={styles.cardLink}>
              What does this transit scientifically mean for you?
            </Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Leo.png')}
            />
            <Text style={styles.cardTitle}>
              Mars in Vishaka - 1 November to 20 November
            </Text>
            <Text style={styles.cardInfo}>
              Lift your energy to a new level. Mars, planet of action and
              competition, is in Vishakha nakshatra across the signs of Libra
              and Scorpio from November 1st to 20th 2023.
            </Text>
            <Text style={styles.cardLink}>
              What does this transit scientifically mean for you?
            </Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Leo.png')}
            />
            <Text style={styles.cardTitle}>
              Mars in Vishaka - 1 November to 20 November
            </Text>
            <Text style={styles.cardInfo}>
              Lift your energy to a new level. Mars, planet of action and
              competition, is in Vishakha nakshatra across the signs of Libra
              and Scorpio from November 1st to 20th 2023.
            </Text>
            <Text style={styles.cardLink}>
              What does this transit scientifically mean for you?
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    alignItems: 'center',
    gap: wp('4.5'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    margin: wp('2'),
    padding: wp('6'),
    width: wp('83'),
    height: wp('110'),
  },
  iconPng: {
    borderWidth: 1,
    width: wp('18'),
    height: wp('18 '),
  },
  cardTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  cardInfo: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 20,
    paddingTop: wp('12'),
    paddingBottom: wp('12'),
  },
  cardLink: {
    color: 'blue',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default HscrollCardBig;
