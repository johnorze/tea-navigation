import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import KeepAwake, { useKeepAwake } from 'expo-keep-awake'
import TeaButton from './TeaButton'

const Timer = props => {
    const min = Math.floor(props.timeRemaining / 60);
    const sec = props.timeRemaining % 60;
    const paddedZero = sec < 10 ? '0' : '';
    useKeepAwake();
    return(
      <View style={styles.timerContainer}> 
        <Text style={styles.timerStyle}>{min} : {paddedZero}{sec}</Text>
        <Text>{"\n"}</Text>
        <TeaButton tea="Stop" onPress={props.onStop} />
        <TeaButton tea="+30" onPress={props.onPlus30Press} />
        <TeaButton tea="-30" onPress={props.onMinus30Press} />
      </View>
      )

}

const styles = StyleSheet.create(
  {
    timerStyle: {
      fontSize: 45,
      textAlign: 'center',
      color: '#FFF'
    },
    timerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
  export default Timer; 