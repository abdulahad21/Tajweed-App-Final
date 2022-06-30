import{View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import  React  from 'react';

const styles = StyleSheet.create({
  bg: { flex:1, paddingTop: 150, backgroundColor: '#cbf35c', alignItems: 'center' },
  less: { fontSize: 25, color: '#4d3398', fontWeight: 'bold' },
  button: {
    margin:10,
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#3498db'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff'
  }
});

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
      <View style={[styles.bg]}>
        <View style={{ height: 100 }}>
          <Text style={ styles.less}>You clicked {count} times</Text>
        </View>
        <View style={{ height: 100 }}>
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
    <View>
      <Text>COUNTER</Text>
      <Counter></Counter>
    </View>
  )
}
export default Counter1;