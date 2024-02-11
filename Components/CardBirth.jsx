import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class CardBirth extends Component {
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
              With the Moon as your soul planet, you should learn to handle your
              emotions. The Moon signifies your mind, and whilst you have the
              capacity to develop an intuitive ability, make sure you don't let
              your emotions affect your state of mind. Being sociable and
              practising compassion are lessons you are here to learn, so be
              sensitive to the suffering of others, and notice how satisfying it
              is to love and nurture others unconditionally. The Moon is easily
              influenced - positively or negatively - by the other planets, so
              make sure you aren't vulnerable to any negativities around you.
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
              With the Moon as your soul planet, you should learn to handle your
              emotions. The Moon signifies your mind, and whilst you have the
              capacity to develop an intuitive ability, make sure you don't let
              your emotions affect your state of mind. Being sociable and
              practising compassion are lessons you are here to learn, so be
              sensitive to the suffering of others, and notice how satisfying it
              is to love and nurture others unconditionally. The Moon is easily
              influenced - positively or negatively - by the other planets, so
              make sure you aren't vulnerable to any negativities around you.
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
              With the Moon as your soul planet, you should learn to handle your
              emotions. The Moon signifies your mind, and whilst you have the
              capacity to develop an intuitive ability, make sure you don't let
              your emotions affect your state of mind. Being sociable and
              practising compassion are lessons you are here to learn, so be
              sensitive to the suffering of others, and notice how satisfying it
              is to love and nurture others unconditionally. The Moon is easily
              influenced - positively or negatively - by the other planets, so
              make sure you aren't vulnerable to any negativities around you.
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
              With the Moon as your soul planet, you should learn to handle your
              emotions. The Moon signifies your mind, and whilst you have the
              capacity to develop an intuitive ability, make sure you don't let
              your emotions affect your state of mind. Being sociable and
              practising compassion are lessons you are here to learn, so be
              sensitive to the suffering of others, and notice how satisfying it
              is to love and nurture others unconditionally. The Moon is easily
              influenced - positively or negatively - by the other planets, so
              make sure you aren't vulnerable to any negativities around you.
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
              With the Moon as your soul planet, you should learn to handle your
              emotions. The Moon signifies your mind, and whilst you have the
              capacity to develop an intuitive ability, make sure you don't let
              your emotions affect your state of mind. Being sociable and
              practising compassion are lessons you are here to learn, so be
              sensitive to the suffering of others, and notice how satisfying it
              is to love and nurture others unconditionally. The Moon is easily
              influenced - positively or negatively - by the other planets, so
              make sure you aren't vulnerable to any negativities around you.
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
              With the Moon as your soul planet, you should learn to handle your
              emotions. The Moon signifies your mind, and whilst you have the
              capacity to develop an intuitive ability, make sure you don't let
              your emotions affect your state of mind. Being sociable and
              practising compassion are lessons you are here to learn, so be
              sensitive to the suffering of others, and notice how satisfying it
              is to love and nurture others unconditionally. The Moon is easily
              influenced - positively or negatively - by the other planets, so
              make sure you aren't vulnerable to any negativities around you.
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
    marginLeft: wp('2'),
    marginRight: wp('2'),
    marginTop: wp('8'),
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
  },
});

export default CardBirth;
