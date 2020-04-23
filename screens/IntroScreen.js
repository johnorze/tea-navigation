import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native'

const quotes = { 
  quotes: [
    "There is always time for tea.", 
    "Drink your tea slowly and reverently, as if it is the axis on which the whole world revolves.",
    "You can never get a cup of tea large enough or a book long enough to suit me.",
    "While there is tea, there is hope.",
    "Honestly, if you're given the choice between Armageddon or tea, you don't say \'what kind of tea?\'",
    "And all from my cup of tea.",
    "[T]here is a great deal of poetry and fine sentiment in a chest of tea."
  ],
  authors: [
    "Uncle Iroh", 
    "Thich Nhat Hanh",
    "C.S. Lewis",
    "Arthur Wing Pinero",
    "Neil Gaiman",
    "Marcel Proust",
    "Ralph Waldo Emerson"
]
}

const randomQuote = Math.floor(Math.random() * quotes.quotes.length)

const IntroScreen = ({navigation}) => (
  <View style={styles.containerStyle}>
    <ImageBackground source={require('../assets/teaphoto.jpg')} style={{width:'100%', height:'100%'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.fillStyle}>
        <View style={{flex: 1}}>
        </View>
        
        <View style={styles.fillStyle}>
          <Text style={styles.quoteStyle}>{quotes.quotes[randomQuote]} {"\n"} -{quotes.authors[randomQuote]} </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  </View>

);

const styles = StyleSheet.create({
    containerStyle: {
      paddingTop: 15,
    },
    fillStyle: {
      flex: 1,
    },
    quoteStyle: {
      marginHorizontal: 20,
      fontSize: 20,
      textAlign: 'center',
      color: 'white'
    },
  })
  
  export default IntroScreen; 