import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  const [name, setName] = useState('Kumar');

  return (
    <View style={styles.layout}>
      <View style={styles.headTop}>
        <View style={styles.headLeft}>
          <View style={styles.icon}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/frame1.png')}
            />
          </View>
          <View>
            <Text style={styles.text}>
              Hey,{name}!<Text>{'  '}</Text>{' '}
            </Text>
            <Text style={styles.text2}>Aug 12 ,Monday</Text>
          </View>
        </View>
        <View style={styles.headRight}>
          <Ionicons name="search-outline" size={30} color={'black'} />
          <View style={styles.menuIcon}>
            <Ionicons name="menu" size={20} color={'black'} />
          </View>
        </View>
      </View>

      <View style={styles.headDown}>
        <View style={styles.button}>
          <Text style={styles.btnText}>You</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.btnText}>Together</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.btnText}>Enterprise</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: hp('2.5'),
    // padding: wp('3'),
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',

    textAlignVertical: 'center',
    textAlign: 'center',
  },
  text2: {
    fontFamily: 'Poppins-Regular',
    color: 'grey',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  headTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    // borderWidth: wp('.5'),
    borderWidth: 1.7,
    borderRadius: 50,
    padding: wp('1'),
    // padding: 4,
    marginRight: wp('2.2'),
  },
  headRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  menuIcon: {
    borderRadius: 50,
    // borderWidth: wp('.5'),
    borderWidth: 1.7,
    padding: wp('3'),
    // padding: 10,
    marginLeft: wp('3'),
    // marginLeft: 12,
  },

  headDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: wp('0.3'),
    // borderWidth: 1.3,
    borderColor: 'black',
    padding: wp('1.3'),
    // padding: 5,
    borderRadius: 30,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F5DBD',
    height: hp('5.2'),
    borderRadius: 20,
    marginLeft: wp('1'),
    marginRight: wp('1'),
  },
  btnText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});

export default Header;
