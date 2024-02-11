import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Panchang() {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.headContainer}>
        <Octicons name="arrow-left" size={20} color={'black'} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.headText}>Tue, Nov 28</Text>
          <AntDesign name="down" size={20} color={'black'} />
        </View>
        <View style={styles.icon}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/frame1.png')}
          />
        </View>
      </View>

      <View style={styles.hero}>
        <Image
          style={styles.iconPng}
          source={require('../assets/signs/Leo.png')}
        />
        <Text style={styles.title}>Panchang</Text>
      </View>

      <View style={styles.cardContainer}>
        <View
          style={[
            styles.card,
            styles.shadow,
            Platform.OS === 'android' && styles.shadowAndroid,
          ]}>
          <View style={styles.cardHead}>
            <Image source={require('../assets/panchang/lunar-eclipse.png')} />
            <Text style={styles.cardHeadText}>Lunar Moon</Text>
          </View>
          <Text style={styles.cardtext}>Kartika-Amanta{'\n'}</Text>
          <Text style={styles.cardtext}>Maargashira-Purimata</Text>
        </View>

        <View
          style={[
            styles.card,
            styles.shadow,
            Platform.OS === 'android' && styles.shadowAndroid,
          ]}>
          <View style={styles.cardHead}>
            <Image source={require('../assets/panchang/sun-solid.png')} />
            <Text style={styles.cardHeadText}>Vara-Tuesday</Text>
          </View>
          <Text style={styles.cardtext}>Kartika-Amanta{'\n'}</Text>
          <Text style={styles.cardtext}>Maargashira-Purimata</Text>
        </View>

        <View
          style={[
            styles.card,
            styles.shadow,
            Platform.OS === 'android' && styles.shadowAndroid,
          ]}>
          <View style={styles.cardHead}>
            <Image source={require('../assets/panchang/sun-solid.png')} />
            <Text style={styles.cardHeadText}>Tithi</Text>
          </View>
          <Text style={styles.cardtext}>Hindu Lunar Day{'\n'}</Text>
        </View>
      </View>
      <View
        style={[styles.timingsContainer, styles.shadow, styles.shadowAndroid]}>
        <View style={styles.timingsHead}>
          <View style={styles.timingsHeadLeft}>
            <Image source={require('../assets/carbon_time-filled.png')} />
            <Text style={{color: 'black', fontSize: 17.5, fontWeight: 'bold'}}>
              Timings
            </Text>
          </View>
          <View style={styles.timingsHeadRight}>
            <Image source={require('../assets/info-outline.png')} />
          </View>
        </View>

        <View style={[styles.timings]}>
          <View
            style={[
              styles.timecard,
              styles.shadow,
              styles.shadowAndroid,
              {backgroundColor: '#F3F9EC'},
            ]}>
            <Text style={styles.tcardTitle}>Brahama Muhurta</Text>
            <Text style={styles.time}>04:47 AM</Text>
            <Text style={styles.to}>To</Text>
            <Text style={styles.time}>05:36 Am</Text>
          </View>
          <View
            style={[
              styles.timecard,
              styles.shadow,
              styles.shadowAndroid,
              {backgroundColor: '#FFF9E5'},
            ]}>
            <Text style={styles.tcardTitle}>Rahu Kaal </Text>
            <Text style={styles.time}>04:47 AM</Text>
            <Text style={styles.to}>To</Text>
            <Text style={styles.time}>05:36 Am</Text>
          </View>
          <View
            style={[
              styles.timecard,
              styles.shadow,
              styles.shadowAndroid,
              {backgroundColor: '#F8EAFA'},
            ]}>
            <Text style={styles.tcardTitle}>Guli Kaal</Text>
            <Text style={styles.time}>04:47 AM</Text>
            <Text style={styles.to}>To</Text>
            <Text style={styles.time}>05:36 Am</Text>
          </View>
          <View
            style={[
              styles.timecard,
              styles.shadow,
              styles.shadowAndroid,
              {backgroundColor: '#E6F7FF'},
            ]}>
            <Text style={styles.tcardTitle}>Abhijit</Text>
            <Text style={styles.time}>04:47 AM</Text>
            <Text style={styles.to}>To</Text>
            <Text style={styles.time}>05:36 Am</Text>
          </View>
          <View
            style={[
              styles.timecard,
              styles.shadow,
              styles.shadowAndroid,
              {backgroundColor: '#FFECE5'},
            ]}>
            <Text style={styles.tcardTitle}>Brahama Muhurta</Text>
            <Text style={styles.time}>04:47 AM</Text>
            <Text style={styles.to}>To</Text>
            <Text style={styles.time}>05:36 Am</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: wp('4'),
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  icon: {
    borderWidth: 1.7,
    borderRadius: 50,
    padding: wp('.5'),
  },
  hero: {
    alignItems: 'center',
    gap: wp('3.5'),
  },
  iconPng: {
    width: wp('15'),
    height: wp('15'),
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  cardContainer: {
    padding: wp('2'),
    gap: wp('4'),
  },
  card: {
    borderRadius: 12,
    padding: wp('3.2'),
  },
  cardHead: {
    flexDirection: 'row',
    gap: 8,
  },
  cardHeadText: {
    color: 'black',
  },
  cardtext: {},
  shadow: {
    backgroundColor: 'white', // Set background color to match the shadow color
    // borderRadius: 10, // Optional: Add border radius to match the card style
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  shadowAndroid: {
    // borderWidth: 1, // Add a border to mimic shadow on Android
    borderColor: 'rgba(0,0,0,0.25)', // Set border color to match shadow color
  },

  timingsContainer: {
    // borderWidth: 1,
    padding: wp('2'),
    gap: wp('2'),
    // borderWidth: 1,
  },
  timingsHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timingsHeadLeft: {
    flexDirection: 'row',
    gap: wp('2'),
  },
  timingsHeadRight: {},
  timings: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp('2'),
    marginTop: wp('3.5'),
  },
  timecard: {
    alignItems: 'center',
    borderRadius: 10,
    padding: wp('3'),
    width: wp('42'),
    height: wp('34'),
  },
  // lastCard: {
  //   position: 'absolute',
  //   left: '50%',
  //   transform: [{translateX: -50}],
  // },
  tcardTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: wp('3'),
  },
  time: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  to: {
    fontSize: 15.5,
    color: 'black',
    padding: wp('.8'),
  },
});
