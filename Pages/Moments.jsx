import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Header from '../Components/Header';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tools = () => {
  return (
    <View style={styles.layout}>
      <ScrollView>
        <Header />
        <View style={styles.titlebar}>
          <View style={styles.titleTop}>
            <Text style={styles.text}>Moments </Text>
            <Text style={styles.editText}>Know More</Text>
          </View>
        </View>

        <View
          style={[
            styles.timelineContainer,
            styles.shadow,
            styles.shadowAndroid,
          ]}>
          <View style={styles.tHead}>
            <Image style={styles.png} source={require('../assets/crown.png')} />
            <Text style={styles.tText}>
              You are on your <Text style={styles.gold}> GOLDEN MOVEMENT</Text>
            </Text>
          </View>
          <View style={styles.tBody}>
            <View style={styles.row}>
              <View style={styles.left}>
                <Text style={styles.leftText1}>08:30 AM</Text>
                <Text style={styles.leftText2}>10:28 AM</Text>
              </View>
              <View style={[styles.right, styles.shadow, styles.shadowAndroid]}>
                <View style={styles.rightLeft}>
                  <Image
                    style={styles.png}
                    source={require('../assets/crown.png')}
                  />
                  <Text style={styles.txt}>GOLDEN moments</Text>
                </View>
                <AntDesign name="right" size={20} color={'black'} />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.left}>
                <Text style={styles.leftText1}>08:30 AM</Text>
                <Text style={styles.leftText2}>10:28 AM</Text>
              </View>
              <View style={[styles.right, styles.shadow, styles.shadowAndroid]}>
                <View style={styles.rightLeft}>
                  <Image
                    style={styles.png}
                    source={require('../assets/idea.png')}
                  />
                  <Text style={styles.txt}>Productivity moments</Text>
                </View>
                <AntDesign name="right" size={20} color={'black'} />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.left}>
                <Text style={styles.leftText1}>08:30 AM</Text>
                <Text style={styles.leftText2}>10:28 AM</Text>
              </View>
              <View style={[styles.right, styles.shadow, styles.shadowAndroid]}>
                <View style={styles.rightLeft}>
                  <Image
                    style={styles.png}
                    source={require('../assets/crown.png')}
                  />
                  <Text style={styles.txt}>GOLDEN moments</Text>
                </View>
                <AntDesign name="right" size={20} color={'black'} />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.left}>
                <Text style={styles.leftText1}>08:30 AM</Text>
                <Text style={styles.leftText2}>10:28 AM</Text>
              </View>
              <View style={[styles.right, styles.shadow, styles.shadowAndroid]}>
                <View style={styles.rightLeft}>
                  <Image
                    style={styles.png}
                    source={require('../assets/mute.png')}
                  />
                  <Text style={styles.txt}>Silence moments</Text>
                </View>
                <AntDesign name="right" size={20} color={'black'} />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.left}>
                <Text style={styles.leftText1}>08:30 AM</Text>
                <Text style={styles.leftText2}>10:28 AM</Text>
              </View>
              <View style={[styles.right, styles.shadow, styles.shadowAndroid]}>
                <View style={styles.rightLeft}>
                  <Image
                    style={styles.png}
                    source={require('../assets/crown.png')}
                  />
                  <Text style={styles.txt}>GOLDEN moments</Text>
                </View>
                <AntDesign name="right" size={20} color={'black'} />
              </View>
            </View>
          </View>
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Register</Text>
        </Pressable>
      </ScrollView>
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

  timelineContainer: {
    gap: wp('7.5'),
    borderRadius: 20,
    paddingBottom: wp('12'),
    // paddingLeft: wp('5'),
    // backgroundColor: 'pink',
  },
  tHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp('4'),
    backgroundColor: '#FBEFCA',
    padding: wp('3.5'),
  },
  png: {
    width: wp('7'),
    height: wp('7'),
  },
  txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tText: {
    fontSize: 16,
  },
  gold: {
    color: '#f5b800',
    fontWeight: 'bold',
  },
  tBody: {
    gap: wp('4'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    paddingLeft: wp('3.8'),
    gap: wp('2.'),
  },
  leftText1: {
    color: 'black',
    fontSize: 16,
  },
  leftText2: {
    fontSize: 16,
  },
  right: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('4'),
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
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
        elevation: 5,
      },
    }),
  },
  shadowAndroid: {
    // borderWidth: 1, // Add a border to mimic shadow on Android
    borderColor: 'rgba(0,0,0,1.25)', // Set border color to match shadow color
  },
  rightLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('3'),
  },
  btn: {
    borderRadius: 12,
  },
  btn: {
    marginTop: wp('20'),
    borderRadius: 50,
    padding: wp('3.5'),
    backgroundColor: '#3F5DBD',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default Tools;
