import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Panchang() {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
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
      </View>
      <View style={styles.cardContainer}>
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
      </View>
      <View style={styles.cardContainer}>
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
    padding: wp('4'),
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
});
