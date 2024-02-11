import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HscrollCardBig} from '../Components/HscrollcardBig';

export default function Personalized() {
  return (
    <View>
      <ScrollView>
        <View style={styles.headContainer}>
          <Octicons name="arrow-left" size={20} color={'black'} />

          <Text style={styles.headText}>October 20,2023</Text>

          <Image
            style={styles.openIcon}
            source={require('../assets/open-outline.png')}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>
            November Personalized Planetary Insights For You
          </Text>
          <Text style={styles.text}>
            What does November have in store for you? See the transits that are
            happening in the sky in November and read personalized insights for
            each one based on your Vedic Moon sign in your birth chart (which we
            calculate for you in the).
          </Text>

          <Image
            style={styles.planetsImg}
            source={require('../assets/planets.png')}
          />
        </View>

        <HscrollCardBig />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('2.2'),
  },
  headText: {
    fontSize: 15,
    color: 'grey',
  },
  openIcon: {
    width: wp('6'),
    height: wp('6'),
  },
  infoContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    // fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
    paddingLeft: wp('9.5'),
    paddingRight: wp('9.5'),
    paddingBottom: wp('6'),
  },
  text: {
    color: 'black',
    paddingLeft: wp('8.5'),
    paddingRight: wp('8.5'),
    textAlign: 'center',
    lineHeight: 20,
  },
  planetsImg: {
    resizeMode: 'contain',
    width: wp('90'),
    height: wp('28'),
    padding: wp('12'),
  },
});
