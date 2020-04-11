import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const TeaButton = props => (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
          <Text style={styles.buttonStyle}> {props.tea} </Text>
        </TouchableOpacity>
    );

const styles = StyleSheet.create(
  {
    buttonStyle: {
      borderWidth: 0,
      fontSize: 18,
      textAlign: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      color: '#FFF',
    },
    buttonContainer: {
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight:15, 
    }
  })

export default TeaButton