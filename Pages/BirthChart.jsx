import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardBirth from '../Components/CardBirth';

export default function BirthChart() {
  return (
    <View>
      <ScrollView style={styles.wrapper}>
        <View style={styles.nonCardContainer}>
          <View style={styles.headContainer}>
            <Octicons name="arrow-left" size={20} color={'black'} />

            <Text style={styles.headText}>Your Birth Chart</Text>

            <Image
              style={styles.openIcon}
              source={require('../assets/open-outline.png')}
            />
          </View>

          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              padding: wp('5.5'),
            }}>
            Chitresh
            <Text style={{fontWeight: 400}}> -24 Nov1988, 11:17 AM,Ajmer</Text>
          </Text>

          <View style={styles.sCardContainer}>
            <View style={styles.sCard}>
              <Image
                style={styles.sPng}
                source={require('../assets/signs/Capricorn.png')}
              />
              <Text style={styles.sText1}>Your Rising Sign is</Text>
              <Text style={styles.sText2}>Capricorn</Text>
            </View>
            <Image
              style={styles.sCarddivider}
              source={require('../assets/sCarddivider.png')}
            />
            <View style={styles.sCard}>
              <Image
                style={styles.sPng}
                source={require('../assets/signs/Libra.png')}
              />
              <Text style={styles.sText1}>Your Nakshatra is</Text>
              <Text style={styles.sText2}>Rohinin</Text>
            </View>
          </View>

          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Take a Personality Quiz</Text>
          </Pressable>

          <View style={styles.tableContainer}>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/circle-dot.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/moon.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/mars.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/mercury.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/circle-dot.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/circle-dot.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/circle-dot.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/circle-dot.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/table/circle-dot.png')} />
                <Text
                  style={{
                    marginLeft: wp('1'),
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>
              <Text>Scorpio</Text>
              <Text>11th House</Text>
            </View>
            <Text style={styles.note}>
              Note: Tap on any of the above placements to view a detailed
              explanation of what each means.
            </Text>
          </View>

          <CardBirth />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  nonCardContainer: {
    padding: wp('4'),
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp('2.2'),
    paddingRight: wp('2.2'),
    paddingTop: wp('2.2'),
    paddingBottom: wp('.5'),
  },
  headText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  openIcon: {
    width: wp('6'),
    height: wp('6'),
  },
  sCardContainer: {
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 17,
    backgroundColor: '#3F5DBD1a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('5'),
  },
  sCard: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  sPng: {
    width: wp('12'),
    height: wp('12'),
  },
  sText1: {
    paddingTop: wp('2'),
  },
  sText2: {
    color: 'black',
    fontWeight: 'bold',
  },
  sCarddivider: {
    height: wp('24'),
    width: wp('20'),
    resizeMode: 'contain',
  },
  btn: {
    margin: wp('8'),
    borderRadius: 15,
    padding: wp('4.5'),
    backgroundColor: '#3F5DBD',
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  tableContainer: {
    backgroundColor: '#3F5DBD1a',
    padding: wp('4'),
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: 'grey',
    paddingTop: wp('2.8'),
    paddingBottom: wp('2.5'),
  },
  note: {
    color: '#3F5DBD',
    paddingTop: wp('4'),
  },
});
