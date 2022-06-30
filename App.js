import ContactYoutube from './ContactYoutube';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularSurat from './PopularSurat';
import Quran from './Quran';
import Speak from './Speak';
import Calendar1 from './Calendar1';
import Counter1 from './Counter1';
import Result from './Result';
import HomeScreen from './src/screens/home.screen';
import DetailScreen from './src/screens/detail.screen';

const App =()=> {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN-FORM">
        <Stack.Screen name='LOGIN-FORM' component={ContactYoutube}/>
        <Stack.Screen name='HOME-PAGE' component={Home}/>
        <Stack.Screen name='CALENDAR-PAGE' component={Calendar1}/>
        <Stack.Screen name='COUNTER-PAGE' component={Counter1}/>
        <Stack.Screen name='POPULARSURAT-PAGE' component={PopularSurat}/> 
        <Stack.Screen name='QURAN-PAGE' component={Quran}/>
        <Stack.Screen name='SPEAK-PAGE' component={Speak}/>
        <Stack.Screen name='RESULT-PAGE' component={Result}/>
        <Stack.Screen name={'POPULARSURAT'} component={HomeScreen}/>
        <Stack.Screen name={'Detail'} component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


