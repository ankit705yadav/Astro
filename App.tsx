import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import Tools from './Pages/Tools';
import Today from './Pages/Today';
import Personalized from './Pages/Personalized';
import BirthChart from './Pages/BirthChart';
import Hora from './Pages/Hora';
import Panchang from './Pages/Panchang';
import Moments from './Pages/Moments';
import Transit from './Pages/Transit';
import setDefaultProps from 'react-native-simple-default-props';

const defaultText = {
  style: [{color: 'black', fontFamily: 'SpaceGrotesk-Regular'}],
};

setDefaultProps(Text, defaultText);

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tools" component={Tools} />
        <Stack.Screen name="Today" component={Today} />
        <Stack.Screen name="BirthChart" component={BirthChart} />
        <Stack.Screen name="Transit" component={Transit}></Stack.Screen>
        <Stack.Screen name="Moments" component={Moments} />
        <Stack.Screen name="Panchang" component={Panchang} />
        <Stack.Screen name="Hora" component={Hora} />
        <Stack.Screen name="Personalized" component={Personalized} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
