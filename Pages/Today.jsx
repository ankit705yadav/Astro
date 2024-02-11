import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useState} from 'react';
import HscrollCard from '../Components/HscrollCard';

const Today = props => {
  const [data, setDate] = useState('28 Nov 13:32 to 29 Nov 13:59');

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View>
          <View style={styles.headContainer}>
            <Octicons name="arrow-left" size={20} color={'black'} />

            <Text style={styles.headText}>Horoscope</Text>
            <View style={styles.icon}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/frame1.png')}
              />
            </View>
          </View>

          <HscrollCard />

          <View style={styles.infoContainer}>
            <Text style={styles.date}>{data}</Text>
            <Text style={styles.infoText}>
              Moon in Mrigashira nakshatra enters your 1st house of Taurus from
              your natal moon during the first part of this transit, and then
              moves to the 2nd house of Gemini during the latter part.{'\n'}
            </Text>

            <Text style={styles.infoText}>
              1st house represents your physical body, personality and is
              referred to as the house of the "self" in it's limited identity.
              {'\n'}
            </Text>
            <Text style={styles.infoText}>
              2nd house represents wealth, family, food, speech etc.
            </Text>

            <View style={[styles.card, {borderColor: 'blue'}]}>
              <View style={styles.cardTop}>
                <Text style={styles.cardHeadText}>For You</Text>
                <Image
                  style={styles.cardIcon}
                  source={require('../assets/card.png')}
                />
              </View>
              <Text style={styles.infoText}>
                You are more sensual and sensitive than usual during this
                transit, but are sometimes lethargic and feel the need to take a
                break. Your mind jumps from one thing to another, and you can
                benefit from exercise or a brisk walk to balance your mental
                energy. Focus on your money during the latter part of the
                transit as you search for the ultimate financial solution; it is
                wise to be practical about it. Though you're in the mood to
                spend money, be aware of impulse purchases, and avoid
                confrontation.{'\n'}
              </Text>
              <Text style={styles.infoText}>
                You could spend time nurturing yourself and others, which comes
                from a baseless feeling of choices and take care of yourself.
              </Text>
            </View>

            <View style={[styles.card, {borderColor: 'green'}]}>
              <View style={styles.cardTop2}>
                <Image source={require('../assets/green.png')} />
                <Text style={styles.cardHeadText}>Favourable Activities</Text>
              </View>
              <Text style={styles.infoText}>
                Demolition, Destruction, Throwing out Old Objects and Habits,
                Confrontations, Research, Creativity, Tearing Down Structures,
                Managing Difficult Situations, Research, Addressing Problems,
                Dissolving Negativity.{'\n'}
              </Text>
            </View>

            <View style={[styles.card, {borderColor: 'red'}]}>
              <View style={styles.cardTop2}>
                <Image source={require('../assets/red.png')} />
                <Text style={styles.cardHeadText}>Unfavourable Activities</Text>
              </View>
              <Text style={styles.infoText}>
                Beginning a Project or Event, Weddings and Religious Ceremonies,
                Giving or Receiving Honours, Travel.{'\n'}
              </Text>
            </View>
          </View>
          <Button
            onPress={() => props.navigation.navigate('Tools')}
            title="Go To Tools Page"
            style={{backgroundColor: 'red', color: 'black'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('2.2'),
  },
  headText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  icon: {
    borderWidth: 1.7,
    borderRadius: 50,
    padding: wp('.5'),
    // marginRight: wp('1.2'),
  },

  infoContainer: {
    padding: wp('3'),
  },

  date: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    // textAlignVertical: 'center',
    margin: wp('2'),
  },
  infoText: {
    color: 'grey',
    fontSize: 17,
  },

  card: {
    borderWidth: 2,
    // borderColor: 'lightblue',
    borderRadius: 10,
    padding: wp('6'),
    marginTop: wp('6.5'),
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTop2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: wp('2'),
    marginBottom: wp('2'),
  },
  cardHeadText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
  },
  cardIcon: {
    width: wp('12'),
    height: wp('12'),
  },
});

export default Today;
