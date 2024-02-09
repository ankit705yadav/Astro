import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tools from './Pages/Tools';
import Today from './Pages/Today';
import Personalized from './Pages/Personalized';
import BirthChart from './Pages/BirthChart';
import Hora from './Pages/Hora';
import Panchang from './Pages/Panchang';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Panchang" component={Panchang} />
        <Stack.Screen name="Hora" component={Hora} />
        <Stack.Screen name="BirthChart" component={BirthChart} />
        <Stack.Screen name="Personalized" component={Personalized} />
        <Stack.Screen name="Today" component={Today} />
        <Stack.Screen name="Tools" component={Tools} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
