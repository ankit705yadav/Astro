import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Header from '../Components/Header';
import NavBottom from '../Components/NavBottom';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Tools = props => {
  return (
    <View style={styles.layout}>
      <ScrollView>
        <Header />
        <View style={styles.titlebar}>
          <View style={styles.titleTop}>
            <Text style={styles.text}>Tools </Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
          <View>
            <Text style={styles.titleBottom}>
              Tap Edit to see more tools you can edit to your homepage
            </Text>
          </View>
        </View>

        <View style={styles.cardWrapper}>
          <Pressable onPress={() => props.navigation.navigate('BirthChart')}>
            <View style={[styles.card, styles.boxShadow, {zIndex: 0.5}]}>
              <View style={styles.icon}>
                <Image
                  style={styles.cardImg}
                  source={require('../assets/crd1.png')}
                />
              </View>
              <Text style={styles.cardText}>Your Birth Chart</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Hora')}>
            <View style={[styles.card, styles.androidShadow]}>
              <View style={styles.icon}>
                <Image
                  style={styles.cardImg}
                  source={require('../assets/crd2.png')}
                />
              </View>
              <Text style={styles.cardText}>Hora</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Panchang')}>
            <View style={[styles.card, styles.boxShadow, styles.androidShadow]}>
              <View style={styles.icon}>
                <Image
                  style={styles.cardImg}
                  source={require('../assets/crd3.png')}
                />
              </View>
              <Text style={styles.cardText}>Panchang</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Moments')}>
            <View style={styles.card}>
              <View style={styles.icon}>
                <Image
                  style={styles.cardImg}
                  source={require('../assets/crd4.png')}
                />
              </View>
              <Text style={styles.cardText}>Assistant</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Personalized')}>
            <View style={styles.card}>
              <View style={styles.icon}>
                <Image
                  style={styles.cardImg}
                  source={require('../assets/crd5.png')}
                />
              </View>
              <Text style={styles.cardText}>Moon 2.5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Today')}>
            <View style={styles.card}>
              <View style={styles.icon}>
                <Image
                  style={styles.cardImg}
                  source={require('../assets/crd6.png')}
                />
              </View>
              <Text style={styles.cardText}>Together</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Transit')}>
            <View style={styles.card}>
              <View style={styles.icon}>
                <Image
                  style={styles.cardImg}
                  source={require('../assets/crd7.png')}
                />
              </View>
              <Text style={styles.cardText}>Edit</Text>
            </View>
          </Pressable>
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
  titleBottom: {
    color: 'grey',
    marginTop: wp('2'),
  },

  cardWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: wp('5'),
    paddingRight: wp('5'),
    gap: wp('4'),
    justifyContent: 'space-between',
  },

  card: {
    padding: wp(2.5),
    width: wp('25'),
    height: wp('33'),
    borderWidth: wp('.3'),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightblue',
  },

  icon: {
    borderWidth: wp('.4'),
    borderRadius: 30,
    padding: wp('1.5'),
  },
  cardImg: {
    width: wp('11'),
    height: wp('11'),
  },
  cardText: {
    alignItems: 'center',
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 'auto',
  },
});

export default Tools;
