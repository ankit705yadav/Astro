import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class HscrollCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Your Sign</Text>
        <ScrollView horizontal>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Leo.png')}
            />
            <Text style={styles.cardTitle}>Leo</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Aries.png')}
            />
            <Text style={styles.cardTitle}>Aries</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Libra.png')}
            />
            <Text style={styles.cardTitle}>Libra</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Virgo.png')}
            />
            <Text style={styles.cardTitle}>Virgo</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Cnacer.png')}
            />
            <Text style={styles.cardTitle}>Cnacer</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Gemini.png')}
            />
            <Text style={styles.cardTitle}>Gemini</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Pisces.png')}
            />
            <Text style={styles.cardTitle}>Pisces</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Taurus.png')}
            />
            <Text style={styles.cardTitle}>Taurus</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Scorpio.png')}
            />
            <Text style={styles.cardTitle}>Scorpio</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Aquarius.png')}
            />
            <Text style={styles.cardTitle}>Aquarius</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Capricorn.png')}
            />
            <Text style={styles.cardTitle}>Capricorn</Text>
          </View>
          <View style={styles.Card}>
            <Image
              style={styles.iconPng}
              source={require('../assets/signs/Sagittarius.png')}
            />
            <Text style={styles.cardTitle}>Sagittarius</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    alignItems: 'center',
    gap: wp('1.6'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    margin: wp('2'),
    padding: wp('2'),
    width: wp('25'),
    height: wp('27.5'),
  },
  iconPng: {
    borderWidth: 1,
    width: wp('18'),
    height: wp('18 '),
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginTop: wp('2'),
  },
  cardTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
});

export default HscrollCard;
