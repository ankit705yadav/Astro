import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../Components/Header';
import NavBottom from '../Components/NavBottom';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Transit = () => {
  return (
    <View style={styles.layout}>
      <ScrollView>
        <Header />
        <View style={styles.titlebar}>
          <View style={styles.titleTop}>
            <Text style={styles.text}>upcoming transits </Text>
            <Text style={styles.editText}>view all</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={[styles.card, styles.shadow, styles.shadowAndroid]}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={require('../assets/sun2.png')}
              />
            </View>
            <View style={styles.txtContainer}>
              <View style={styles.cardTop}>
                <Text style={styles.cHeadLeft}>Sun Trabsit</Text>
                <Text style={styles.cHeadRight}>13 days</Text>
              </View>
              <Text>
                Venus (in Swati) - A chance to{'\n'} mix courage and charm
              </Text>
              <View style={styles.cardBottom}>
                <Text style={styles.date}>Dec 17 - Dec 30, 2023</Text>
                <View style={styles.rdMoreContainer}>
                  <Text style={styles.rdMore}>Read More</Text>
                  <AntDesign name="arrowright" />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.card, styles.shadow, styles.shadowAndroid]}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img2}
                source={require('../assets/venus.png')}
              />
            </View>
            <View style={styles.txtContainer}>
              <View style={styles.cardTop}>
                <Text style={styles.cHeadLeft}>Sun Trabsit</Text>
                <Text style={styles.cHeadRight}>13 days</Text>
              </View>
              <Text>
                Venus (in Swati) - A chance to{'\n'} mix courage and charm
              </Text>
              <View style={styles.cardBottom}>
                <Text style={styles.date}>Dec 17 - Dec 30, 2023</Text>
                <View style={styles.rdMoreContainer}>
                  <Text style={styles.rdMore}>Read More</Text>
                  <AntDesign name="arrowright" />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.card, styles.shadow, styles.shadowAndroid]}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={require('../assets/sun2.png')}
              />
            </View>
            <View style={styles.txtContainer}>
              <View style={styles.cardTop}>
                <Text style={styles.cHeadLeft}>Sun Trabsit</Text>
                <Text style={styles.cHeadRight}>13 days</Text>
              </View>
              <Text>
                Venus (in Swati) - A chance to{'\n'} mix courage and charm
              </Text>
              <View style={styles.cardBottom}>
                <Text style={styles.date}>Dec 17 - Dec 30, 2023</Text>
                <View style={styles.rdMoreContainer}>
                  <Text style={styles.rdMore}>Read More</Text>
                  <AntDesign name="arrowright" />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.card, styles.shadow, styles.shadowAndroid]}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img2}
                source={require('../assets/venus.png')}
              />
            </View>
            <View style={styles.txtContainer}>
              <View style={styles.cardTop}>
                <Text style={styles.cHeadLeft}>Sun Trabsit</Text>
                <Text style={styles.cHeadRight}>13 days</Text>
              </View>
              <Text>
                Venus (in Swati) - A chance to{'\n'} mix courage and charm
              </Text>
              <View style={styles.cardBottom}>
                <Text style={styles.date}>Dec 17 - Dec 30, 2023</Text>
                <View style={styles.rdMoreContainer}>
                  <Text style={styles.rdMore}>Read More</Text>
                  <AntDesign name="arrowright" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <NavBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: wp('3'),
  },
  titlebar: {
    marginTop: wp('5'),
    marginLeft: wp('2'),
    marginRight: wp('2'),
    marginBottom: wp('5'),
  },
  titleTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
  editText: {
    color: '#F5B800',
    textDecorationLine: 'underline',
  },
  cardContainer: {
    gap: 30,
  },
  card: {
    flexDirection: 'row',
    padding: 5,
    // borderWidth: 1,
    gap: wp('3'),
    borderRadius: 20,
  },
  imgContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
  },
  img: {
    width: wp('17'),
    height: wp('17'),
    borderWidth: 1,
  },
  img2: {
    width: wp('15'),
    height: wp('15'),
  },
  txtContainer: {
    // borderWidth: 1,
    marginRight: 10,
    flex: 1,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cHeadLeft: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cHeadRight: {
    fontSize: 15,
    color: 'black',
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp('2'),
  },
  date: {},
  rdMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1'),
  },
  rdMore: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  shadow: {
    // backgroundColor: 'white', // Set background color to match the shadow color
    borderRadius: 20, // Optional: Add border radius to match the card style
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 50,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  shadowAndroid: {
    // borderWidth: 1, // Add a border to mimic shadow on Android
    // borderColor: 'rgba(8,0,0,0.25)', // Set border color to match shadow color
  },
});

export default Transit;
