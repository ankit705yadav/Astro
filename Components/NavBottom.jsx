import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {View, StyleSheet, Text, Image} from 'react-native';

const NavBottom = () => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.iconPng}
          source={require('../assets/navBottom/1.png')}
        />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.iconPng}
          source={require('../assets/navBottom/2.png')}
        />
        <Text style={styles.text}>Planner</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.iconPng}
          source={require('../assets/navBottom/3.png')}
        />
        <Text style={styles.text}>Discover</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.iconPng}
          source={require('../assets/navBottom/4.png')}
        />
        <Text style={styles.text}>Transists</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.iconPng}
          source={require('../assets/navBottom/5.png')}
        />
        <Text style={styles.text}>Rituals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
    zIndex: 5,
    elevation: 20,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'grey',
  },
  container: {
    alignItems: 'center',
  },
  iconPng: {
    height: wp('6.5'),
    width: wp('6.5'),
  },
});

export default NavBottom;
