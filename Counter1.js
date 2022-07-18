import{View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import  React  from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Counter extends React.Component {
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )
  setReset = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count * 0 })
  )


  render() {
    const { count } = this.state;
    return (
      <View>
      <View style={{alignItems:"center"}}>
      <Text style={styles.microinput}>
      {count} 
    </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={this.setCount}>
          <Text style={styles.buttonText}>Count</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.setReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
    
  }
}

const Counter1 =() => {
  return(
    <View style={styles.Contanier}>
      <View style={styles.textWrapper}>
      <Text style={styles.title}>COUNTER</Text>
      <Counter></Counter>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Contanier: {
    paddingTop:20,
    backgroundColor: '#081B22',
    height:"100%",
    
},
textWrapper: {
  height: hp('70%'), // 70% of height device screen
  width: wp('100%')   // 100% of width device screen
},
microinput:{
  paddingVertical:65,
  backgroundColor:"#255149",
  marginBottom:20,
  width:200,
  height:200,
  borderRadius: 200/2,
  textAlign:"center",
  fontSize:50,
  color: '#fff',
  alignItems:"center",
  
},
row: {
padding:20,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',

},
title:{
    color: '#fff',
    padding:10,
    textAlign:"center",
    fontSize:25,
    backgroundColor: '#255149',
    borderRadius:20,
    marginBottom:50,

},
button: {
  margin:10,
  width: 150,
  height: 50,
  alignItems: 'center',
  borderRadius: 10,
  backgroundColor: '#255149',
  padding:5,
  textAlign:"center",
 },
buttonText: {
  fontSize: 25,
  color: '#fff',
  textAlign:"center",
  alignItems:"center",
}
});
export default Counter1;