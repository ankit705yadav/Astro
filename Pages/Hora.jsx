import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Hora() {
  return (
    <ScrollView>
      <View style={styles.headContainer}>
        <Octicons name="arrow-left" size={20} color={'black'} />

        <Text style={styles.headText}>Hora</Text>
        <View style={styles.icon}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/frame1.png')}
          />
        </View>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.day}>Tue,Nov 28</Text>
        <AntDesign name="down" size={15} color={'black'} />
      </View>

      <ScrollView horizontal>
        <View style={styles.Card}>
          <Image source={require('../assets/sun.png')} />
          <Text style={styles.cardTime}>15:55</Text>
          <Text style={styles.cardTitle}>Mercury</Text>
        </View>
        <View style={styles.Card}>
          <Image source={require('../assets/sun.png')} />
          <Text style={styles.cardTime}>16:53</Text>
          <Text style={styles.cardTitle}>Moon</Text>
        </View>
        <View style={styles.Card}>
          <Image source={require('../assets/sun.png')} />
          <Text style={styles.cardTime}>14:58</Text>
          <Text style={styles.cardTitle}>Venus</Text>
        </View>
        <View style={styles.Card}>
          <Image source={require('../assets/sun.png')} />
          <Text style={styles.cardTime}>14:58</Text>
          <Text style={styles.cardTitle}>Venus</Text>
        </View>
        <View style={styles.Card}>
          <Image source={require('../assets/sunset.png')} />
          <Text style={styles.cardTime}>14:58</Text>
          <Text style={styles.cardTitle}>Venus</Text>
        </View>
        <View style={styles.Card}>
          <Image source={require('../assets/sun.png')} />
          <Text style={styles.cardTime}>14:58</Text>
          <Text style={styles.cardTitle}>Venus</Text>
        </View>
        <View style={styles.Card}>
          <Image source={require('../assets/sun.png')} />
          <Text style={styles.cardTime}>14:58</Text>
          <Text style={styles.cardTitle}>Venus</Text>
        </View>
        <View style={styles.Card}>
          <Image source={require('../assets/sun.png')} />
          <Text style={styles.cardTime}>14:58</Text>
          <Text style={styles.cardTitle}>Venus</Text>
        </View>
      </ScrollView>
      <View style={{alignItems: 'center'}}>
        <AntDesign name="up" size={15} color={'black'} />
      </View>

      <View style={styles.card2Container}>
        <View style={styles.Card2}>
          <Image
            style={styles.iconPng}
            source={require('../assets/signs/Leo.png')}
          />
          <Text style={styles.cardTitle2}>
            Mars in Vishaka - 1 November to 20 November
          </Text>
          <Text style={{color: 'black'}}>14:58 - 15:55</Text>
          <Text style={styles.cardInfo}>
            Venus hora is great for arts, music, romance, desires, emotions,
            material comfort, fun, prosperity, recreation, entertainment, buying
            clothes and jewelry and beauty related work, etc. Be aware of
            overindulging during this time. Venus hora is strong on Friday.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('2.2'),
  },
  headText: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  icon: {
    borderWidth: 1.7,
    borderRadius: 50,
    padding: wp('.5'),
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  day: {
    color: 'black',
    textAlign: 'center',
    marginBottom: wp('3.8'),
  },
  Card: {
    alignItems: 'center',
    gap: wp('1.6'),
    marginTop: wp('3'),
    width: wp('20'),
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
  cardTime: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  cardTitle: {
    color: 'black',
  },
  card2Container: {
    alignItems: 'center',
  },
  Card2: {
    alignItems: 'center',
    gap: wp('4.5'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    marginTop: wp('7'),
    padding: wp('6'),
    width: wp('83'),
  },
  iconPng: {
    borderWidth: 1,
    width: wp('18'),
    height: wp('18 '),
  },
  cardTitle2: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  cardInfo: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 20,
  },
});
