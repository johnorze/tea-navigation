import React, { useState } from 'react';
import { TextInput, View, ScrollView, StyleSheet, Text } from 'react-native';
import TeaButton from './TeaButton'
import { INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS } from 'expo-av/build/Audio';

const SettingsScreen = ({
  onBack, 
  blacktime, 
  greentime, 
  oolongtime, 
  darjeelingtime, 
  herbaltime, 
  whitetime, 
  customtime, 
  onChangeBlackMin, 
  onChangeBlackSec, 
  onChangeGreenMin, 
  onChangeGreenSec,
  onChangeWhiteMin,
  onChangeWhiteSec, 
  onChangeOolongMin, 
  onChangeOolongSec, 
  onChangeDarjeelingMin, 
  onChangeDarjeelingSec, 
  onChangeHerbalMin, 
  onChangeHerbalSec,
  onChangeCustomMin,
  onChangeCustomSec, 
  onSave}) => {
 


//      const paddedZero = sec < 10 ? '0' : '';

      return(
        <ScrollView>
          <View style={styles.containerStyle}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelStyle}>Black      </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleMin}
                value={`${blacktime.min}`} 
                onChangeText={onChangeBlackMin}
                />
              <Text style={styles.labelStyle}> : </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleSec}
                value={`${blacktime.sec}`} 
                onChangeText={onChangeBlackSec}
                />
            </View>
            <View style={{marginTop: 0}}>
              <Text style={styles.recommendStyle}>Recommended Steep Time: 3-5 min</Text>
            </View>
            
            <View style={styles.labelContainer}>
              <Text style={styles.labelStyle}>Green      </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleMin}
                value={`${greentime.min}`} 
                onChangeText={onChangeGreenMin}/>
              <Text style={styles.labelStyle}> : </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleSec}
                value={`${greentime.sec}`} 
                onChangeText={onChangeGreenSec}/>
            </View>
            <View>
              <Text style={styles.recommendStyle}>Recommended Steep Time: 2-3 min</Text>
            </View>

          <View style={styles.labelContainer}>
              <Text style={styles.labelStyle}>White      </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleMin}
                value={`${whitetime.min}`} 
                onChangeText={onChangeWhiteMin}/>
              <Text style={styles.labelStyle}> : </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleSec}
                value={`${whitetime.sec}`} 
                onChangeText={onChangeWhiteSec}/>
            </View>
            <View>
              <Text style={styles.recommendStyle}>Recommended Steep Time: 1-3 min</Text>
            </View>

            <View style={styles.labelContainer}>
              <Text style={styles.labelStyle}>Oolong      </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleMin}
                value={`${oolongtime.min}`} 
                onChangeText={onChangeOolongMin}/>
              <Text style={styles.labelStyle}> : </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleSec}
                value={`${oolongtime.sec}`} 
                onChangeText={onChangeOolongSec}/>
            </View>
            <View>
              <Text style={styles.recommendStyle}>Recommended Steep Time: 3-5 min</Text>
            </View>

            <View style={styles.labelContainer}>
              <Text style={styles.labelStyle}>Darjeeling      </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleMin}
                value={`${darjeelingtime.min}`} 
                onChangeText={onChangeDarjeelingMin}/>
              <Text style={styles.labelStyle}> : </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleSec}
                value={`${darjeelingtime.sec}`} 
                onChangeText={onChangeDarjeelingSec}/>
            </View>
            <View>
              <Text style={styles.recommendStyle}>Recommended Steep Time: 3 min</Text>
            </View>

            <View style={styles.labelContainer}>
              <Text style={styles.labelStyle}>Herbal      </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleMin}
                value={`${herbaltime.min}`} 
                onChangeText={onChangeHerbalMin}/>
              <Text style={styles.labelStyle}> : </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleSec}
                value={`${herbaltime.sec}`} 
                onChangeText={onChangeHerbalSec}/>  
            </View>
            <View>
              <Text style={styles.recommendStyle}>Recommended Steep Time: 5-7 min</Text>
            </View>

            <View style={styles.labelContainer}>
              <Text style={styles.labelStyle}>Custom      </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleMin}
                value={`${customtime.min}`} 
                onChangeText={onChangeCustomMin}/>
              <Text style={styles.labelStyle}> : </Text>
              <TextInput 
                keyboardType='numeric' 
                style={styles.inputStyleSec}
                value={`${customtime.sec}`} 
                onChangeText={onChangeCustomSec}/>  
            </View>

            <View style={{paddingTop: 20}}>
            <TeaButton tea="Go Back" onPress={onBack}/>
            <TeaButton tea="Save" onPress={onSave}/>
            </View>
          </View>
        </ScrollView> 
        
      )
}

const styles = StyleSheet.create({
    containerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      flex: 1,
    },
    inputStyleMin: {
      height: 25,
      width: 25,
      borderColor: 'white',
      borderWidth: 1,
      textAlign: 'center',
      color: 'black',
      alignSelf: 'flex-end',
      fontSize: 18,
      borderRadius: 4,
      backgroundColor: '#fff',
      opacity: .4
    },
    inputStyleSec: {
      height: 25,
      width: 30,
      borderColor: 'white',
      borderWidth: 1,
      textAlign: 'center',
      color: 'black',
      alignSelf: 'flex-end',
      fontSize: 18,
      borderRadius: 4,
      backgroundColor: '#fff',
      opacity: .4,
    },
    labelStyle: {
      color: 'white',
      fontSize: 18,
      textAlign: 'left',
    },
    recommendStyle: {
      color: 'white',
      fontSize: 18,
      fontStyle: 'italic'
    },
    labelContainer: {
      flexDirection: 'row',
      paddingTop: 20
    },
  })
  
  export default SettingsScreen; 